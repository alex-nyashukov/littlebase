import moment from 'moment'

import form from '@/components/DriverForm.vue'

const shortStatuses = {
  'Рабочий': 'Р',
  'Первая см.': '1',
  'Вторая см.': '2',
  'Выходной': 'В',
  'Больничный': 'Б',
  'Отпуск': 'О'
}

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

  statusesByDate({date, count, isShort=false, withExeptions=false, withDate=false}) {
    var statuses = []
    this.graphic.items.forEach((value) => {
        for (var i = 0; i < value.days; i++) {
            statuses.push(value.status)
        }
    })
    // ---
    var result = []
    var currentDate = moment(date)
    var graphicDate = moment(this.graphic.date)
    for (var i = 0; i < count; i++) {
      let newItem = statuses[((currentDate.diff(graphicDate, 'days') % statuses.length) + statuses.length) % statuses.length]
      if(isShort) {
        newItem = shortStatuses[newItem]
      }
      if(withDate) {
        let date_as_string = currentDate.format('YYYY-MM-DD')
        result[date_as_string] = newItem
      } else {
        result.push(newItem)
      }
      currentDate.add(1, 'days')
    }
    return result
}
}