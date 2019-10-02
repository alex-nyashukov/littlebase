export const state = () => ({
  date: null,
  items: [],
  statistic: {}
})

export const getters = {
  statistic: (state) => {
    return state.statistic
  },
  items: (state) => {
    return state.items
  },
  item: (state) => (wayId) => {
    let index = state.items.findIndex(value => (value.wayId == wayId))
    if(index == -1) {
      return { wayId, bus: null, firstSmene: null, secondSmene: null, allDay: null}
    } else {
      return state.items[index]
    }
  },
  availableBuses: (state) => (self) => {
    return self.$store.getters['buses/list'].map(item => ({ text: item.busnumber, value: item._id, ...item}))
  }
}

export const mutations = {
  set_field_value: (state, { wayId, field, value }) => {
    let index = state.items.findIndex(value => (value.wayId == wayId))
    if(index == -1) {
      let obj = { date: state.date, wayId }
      obj[field] = value
      state.items.push(obj)
    } else {
      let obj = Object.assign({}, state.items[index])
      obj[field] = value
      state.items.splice(index, 1, obj)
    }
  },
  set_outfit: (state, { date, items, statistic }) => {
    state.date = date
    state.items = items
    state.statistic = statistic
  }
}

export const actions = {
  readByDate({ commit }, { date }) {
    return new Promise(async (resolve, reject) => {
      const { data } = await this.$axios.get('/api/outfits/'+date)
      commit('set_outfit', { date, items: data.items, statistic: data.statistic })
      resolve()
    })
  },
  save({ state }) {
    return new Promise(async (resolve, reject) => {
      const { data } = await this.$axios.post('/api/outfits/'+state.date, state.items)
      resolve()
    })
  }
}