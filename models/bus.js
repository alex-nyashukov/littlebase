import form from '@/components/BusForm.vue'

export default class {
  busnumber = ''
  color = ''
  mark = ''
  capacity = ''
  drivers = []
  way = null
  status = ''

  constructor(params) {
    Object.assign(this, params)
    this.type = 'buses'
  }
  
  get form() {
    return form
  }
}