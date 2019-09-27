import Driver from '@/models/driver'

export default class Report {
    constructor(date, buses) {
        this.errors = []
        this.workTable = []
        this.driverReserveTable = []
        this.busReserve = []
        this.outDrivers = {
            'Выходной': [],
            'Больничный': [],
            'Отпуск': []
        }
        this.outBuses = {
            'Ремонт': [],
            'СВАРЗ': []
        }
        buses.forEach((bus) => {
            let row = {}
            let workedDriversCount = 0
            bus.drivers.forEach((driver) => {
                driver = new Driver(driver)
                let status = driver.statusesByDate({date: date, count: 1, isShort: false, withExceptions: true})[0].status
                if(!status) {
                    this.errors.push(`У водителя ${driver.tabnumber} нет статуса`)
                    return
                }
                if(['Рабочий', 'Первая см.', 'Вторая см.'].includes(status)) {
                    workedDriversCount++
                    if(row[status]) {
                        this.errors.push(`Водители ${row[status].tabnumber} и ${driver.tabnumber} заняли одну смену на автобусе ${bus.busnumber}!`)
                    }
                    row[status] = driver
                    if(row['Рабочий'] && row['Первая см.'] || row['Рабочий'] && row['Вторая см.']) {
                        this.errors.push(`У водителей автобуса ${bus.busnumber} несовместимые смены`)
                    }
                } else {
                    this.outDrivers[status].push(driver)
                }
            })
            if(['Ремонт', 'СВАРЗ'].includes(bus.status)) {
                this.outBuses[bus.status].push(bus)
                if(workedDriversCount !== 0) {
                    this.driverReserveTable.push(row)
                }
            } else {
                if(workedDriversCount === 0) {
                    this.busReserve.push(bus)
                } else {
                    row['Автобус'] = bus
                    this.workTable.push(row)
                }
            }
        })
    }
}