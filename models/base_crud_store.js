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
        state.list.push(new Model(item))
      },
      update_item(state, { item }) {
        state.list = state.list.map((value) => {
          if(value._id == item._id) {
            return new Model(item)
          }
          return value
        })
      },
      remove_item(state, { id }) {
        state.list = state.list.filter((value) => {
          return value._id !== id
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
      read({ }, { id }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          const item = await this.$axios.$get(`/api/drivers/${id}`)
          // ---
          resolve(new Model(item))
        })
      },
      create({ commit }, { new_item }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          const item = await this.$axios.$post(`/api/drivers`, new_item)
          // ---
          commit('create_item', { item })
          resolve(new Model(item))
        })
      },
      update({ commit }, { updated_item }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          let item = await this.$axios.$put(`/api/drivers/${updated_item._id}`, updated_item)
          // ---
          commit('update_item', { item })
          resolve(new Model(item))
        })
      },
      remove({ commit, axios }, { id }) {
        return new Promise(async (resolve, reject) => {
          // ---Заглушка
          await this.$axios.$delete(`/api/drivers/${id}`)
          // ---
          commit('remove_item', { id })
          resolve()
        })
      }
    }
  }
}