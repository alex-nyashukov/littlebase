import form from '@/components/RouteForm.vue'

export default class Route {
  title = ''
  ways = []

  constructor(params) {
    Object.assign(this, params)
    this.type = 'routes'
  }
  
  get form() {
    return form
  }
}