import moment from 'moment'

import form from '@/components/DriverForm.vue'

var graphic_names = {
  'РВРВРВР': '111',
  'ВРВРВРВ': '112',
  'ВРРВВРР': '221',
  'РВВРРВВ': '222',
  'РРВВРРВ': '223',
  'ВВРРВВР': '224',
  'РРВВРРР': '421',
  'РРРВВРР': '422',
  'РРРРВВР': '423',
  'ВРРРРВВ': '424',
  'ВВРРРРВ': '425',
  'РВВРРРР': '426',
  'РРРРВВР': '521',
  'РРРРРВВ': '522',
  'ВРРРРРВ': '523',
  'ВВРРРРР': '524',
  'РВВРРРР': '525',
  'РРВВРРР': '526',
  'РРРВВРР': '526',
  'РРРРРРВ': '611',
  'ВРРРРРР': '612',
  'РВРРРРР': '613',
  'РРВРРРР': '614',
  'РРРВРРР': '615',
  'РРРРВРР': '616',
  'РРРРРВР': '617',
}

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
  phones = []
  image = ''

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

  get shortName() {
    let new_name = this.name.replace('  ', ' ')
    new_name = new_name.trim()
    let words = new_name.split(' ')
    return words[0] + ' ' + words.slice(1).map((value) => {
      return value[0] + '.'
    }).join('')
  }

  get graphicName() {
    let statuses = this.statusesByDate({ date: '2019-01-01', count: 7, isShort: true })
    statuses = statuses.map(value => (value === '1' || value === '2' ? 'Р' : value))
    let statuses_as_str = statuses.join('')
    return graphic_names[statuses_as_str]
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