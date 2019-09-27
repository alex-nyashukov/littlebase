import moment from 'moment'

import form from '@/components/DriverForm.vue'

export default class Driver {
  tabnumber = ''
  name = ''
  bus = null
  graphic = {
    date: '',
    items: [],
    status: '',
    exceptions: []
  }
  ways = []
  phone = ''

  shortStatuses = {
    'Рабочий': 'Р',
    'Первая см.': '1',
    'Вторая см.': '2',
    'Выходной': 'В',
    'Больничный': 'Б',
    'Отпуск': 'О'
  }

  constructor(params) {
    Object.assign(this, params)
    this.type = 'drivers'
  }
  
  get form() {
    return form
  }

  statusesByDate({date, count, isShort=false, withExceptions=false, withDate=false}) {
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
      let newItem = null
      if(withExceptions) {
        if(this.graphic.status) {
          newItem = { status: this.graphic.status, isException: true }
        } else {
          let temp = this.findExceptionByDate(currentDate.format('YYYY-MM-DD'))
          if(temp) {
            newItem = { status: temp, isException: true}
          } else {
            newItem = { status: newItem = statuses[((currentDate.diff(graphicDate, 'days') % statuses.length) + statuses.length) % statuses.length], isException: false}
          }
        }
        if(isShort) {
          newItem.status = this.shortStatuses[newItem.status]
        }
      } else {
        newItem = statuses[((currentDate.diff(graphicDate, 'days') % statuses.length) + statuses.length) % statuses.length]
        if(isShort) {
          newItem = this.shortStatuses[newItem]
        }
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

  findExceptionByDate(date) {
    let finded = this.graphic.exceptions.find((value) => (value.date===date))
    if(finded) {
      return finded.status
    } else {
      return null
    }
  }
}