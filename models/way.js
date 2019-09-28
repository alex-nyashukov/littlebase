import form from '@/components/WayForm.vue'

export default class Way {
  title = ''
  route = null
  times = {
    durationFirstSmene: null,
    durationSecondSmene: null,
    outPark: null,
    change: null,
    endWork: null,
    lunchFirstSmene: null,
    lunchSecondSmene: null
  }
  isTwoSmene = false
  isWeekend = false
  isWeekday = false
  isSummer = false
  isWinter = false
  buses = []

  constructor(params) {
    Object.assign(this, params)
    this.type = 'ways'
  }
  
  get form() {
    return form
  }
}