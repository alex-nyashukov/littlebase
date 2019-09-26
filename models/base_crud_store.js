export default function(Model, url) {
  return {
    state: () => ({
      list: []
    }),
    getters: {
      list(state) {
        return state.list
      }
    },
    mutations: {
      set_list(state, { list }) {
        state.list = list.map((value) => (new Model(value)))
      },
      create_item(state, { item }) {
        state.list.push(item)
      },
      update_item(state, { item }) {
        state.list = state.list.map((value) => {
          if(value.id == item.id) {
            return item
          }
          return value
        })
      },
      remove_item(state, { id }) {
        state.list = state.list.filter((value) => {
          return value.id !== id
        })
      }
    },
    actions: {
      readAll({ commit }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          const data = await this.$axios.$get(`/api/drivers`)
          // ---
          commit('set_list', { list: data })
          resolve()
        })
      },
      read({ state, axios }, { id }) {
        return new Promise(async (resolve, reject) => {
          console.log(id)
          // ---Заглушка
          const item = await this.$axios.$get(`/api/records/drivers/${id}`)
          // ---
          resolve(new Model(item))
        })
      },
      create({ commit }, { new_item }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          const id = await this.$axios.$post(`/api/records/drivers`, new_item)
          const item = new Model({...new_item, id: id})
          // ---
          commit('create_item', { item })
          resolve(item)
        })
      },
      update({ commit }, { updated_item }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          await this.$axios.$put(`/api/records/drivers/${updated_item.id}`, updated_item)
          // ---
          commit('update_item', { updated_item })
          resolve()
        })
      },
      remove({ commit, axios }, { id }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          await this.$axios.$delete(`/api/records/drivers/${id}`)
          // ---
          commit('remove_item', { id })
          resolve()
        })
      }
    }
  }
}