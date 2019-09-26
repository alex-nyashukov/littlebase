import form from '@/components/DriverForm.vue'

export default class {
  id = null
  tabnumber = ''
  name = ''
  bus = null

  constructor(params) {
    Object.assign(this, params)
    this.type = 'drivers'
  }
  
  get form() {
    return form
  }
}