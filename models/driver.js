import form from '@/components/DriverForm.vue'

export default class {
  tabnumber = ''
  name = ''
  bus = null
  graphic = {
    date: '',
    items: [],
    status: ''
  }
  ways = []
  phone = ''

  constructor(params) {
    Object.assign(this, params)
    this.type = 'drivers'
  }
  
  get form() {
    return form
  }
}