import form from '@/components/BusForm.vue'

export default class {
  id = null
  busnumber = ''

  constructor(params) {
    Object.assign(this, params)
    this.type = 'buses'
  }
  
  get form() {
    return form
  }
}