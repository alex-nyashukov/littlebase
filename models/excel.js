import Excel from "exceljs/dist/exceljs"
import moment from 'moment'

import Report from '@/models/report'
import Driver from '@/models/driver'

export class AgreementExcel {
    static async render({ drivers, template, month }) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        var worksheet = workbook.getWorksheet('main')

        let text_month = [
            'январе',
            'феврале',
            'марте',
            'апреле',
            'мае',
            'июне',
            'июле',
            'фвгусте',
            'сентябре',
            'октябре',
            'ноябре',
            'декабре'
        ]

        worksheet.getRow(1)
            .getCell(1)
            .value = `Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, \
предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную \
работу за пределами установленной продолжительности рабочего времени (баланса), \
а так же работу в выходные, праздничные дни в ${text_month[+month - 1]} 2019  года.`

        var rowNumber = 3
        var columnNumber = 0
        var globalColumnNumber = 0
        drivers.forEach(driver => {
            columnNumber = 2 + globalColumnNumber * 4
            worksheet.getRow(rowNumber)
                .getCell(columnNumber)
                .value = driver.tabnumber
            columnNumber = 3 + globalColumnNumber * 4
            worksheet.getRow(rowNumber)
                .getCell(columnNumber)
                .value = driver.shortName
            rowNumber++
            if (rowNumber == 51) {
                rowNumber = 3
                globalColumnNumber++
            }
        })

        return await workbook.xlsx.writeBuffer();
    }
}

export class ReportExcel {
    static async render({ buses, date }) {
        const workbook = new Excel.Workbook()
        var worksheet = workbook.addWorksheet('Main')
        var report = new Report(date, buses)

        for(let i=0; i<11; i++) {
            let column = worksheet.getColumn(i+1)
            column.width = 11
            column.style = { font: { size: 14 } }
        }

        let startRowNumber = 1
        let startColumnNumber = 1

        var rowNumber = drawWorkTable(worksheet, report, 1, 1)
        rowNumber += 2
        drawMoreInfo(worksheet, report, rowNumber, startColumnNumber)

        return await workbook.xlsx.writeBuffer()

        function drawMoreInfo(worksheet, report, row, column) {

            let startRowNumber = row
            let rowNumber = 0
            let startColumnNumber = column

            let endBusesRow = 0
            let endDriversRow = 0

            worksheet
                .getRow(startRowNumber)
                .getCell(startColumnNumber)
                .value = 'Автобусы'
            worksheet
                .getRow(startRowNumber + 1)
                .getCell(startColumnNumber)
                .value = `Резерв (${report.busReserve.length})`

            startRowNumber = startRowNumber + 2
            rowNumber = startRowNumber

            report.busReserve
                .sort((a, b) => (a.busnumber - b.busnumber))
                .forEach((bus, index) => {
                    rowNumber = startRowNumber + Math.floor(index / 5)
                    worksheet
                        .getRow(rowNumber)
                        .getCell(startColumnNumber + index % 5)
                        .value = bus.busnumber
                })

            rowNumber += 2

            for (let status in report.outBuses) {
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber)
                    .value = `${status} (${report.outBuses[status].length})`
                rowNumber++
                startRowNumber = rowNumber
                report.outBuses[status]
                    .sort((a, b) => (a.busnumber - b.busnumber))
                    .forEach((bus, index) => {
                        rowNumber = startRowNumber + Math.floor(index / 5)

                        worksheet
                            .getRow(rowNumber)
                            .getCell(startColumnNumber + index % 5)
                            .value = bus.busnumber
                    })
                rowNumber += 2
            }
            endBusesRow = rowNumber

            startRowNumber = row
            startColumnNumber += 5

            worksheet
                .getRow(startRowNumber)
                .getCell(startColumnNumber)
                .value = 'Водители'

            worksheet
                .getRow(startRowNumber + 1)
                .getCell(startColumnNumber)
                .value = `Резерв (${report.driverReserveCount})`

            startRowNumber = startRowNumber + 2
            rowNumber = startRowNumber

            worksheet
                .getRow(startRowNumber)
                .getCell(startColumnNumber)
                .value = 'Первая см.'
            worksheet
                .getRow(startRowNumber)
                .getCell(startColumnNumber + 2)
                .value = 'Вторая см.'
            worksheet
                .getRow(startRowNumber)
                .getCell(startColumnNumber + 4)
                .value = 'Полный день'

            rowNumber++
            startRowNumber = rowNumber

            report.driverReserveTable.forEach((row, index) => {
                rowNumber = startRowNumber + index
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber)
                    .value = row['Первая см.'].map(driver => driver.tabnumber).join(', ')
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber + 2)
                    .value = row['Вторая см.'].map(driver => driver.tabnumber).join(', ')
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber + 4)
                    .value = row['Рабочий'].map(driver => driver.tabnumber).join(', ')
                for (let i = 0; i < 6; i++) {
                    worksheet
                        .getRow(rowNumber)
                        .getCell(startColumnNumber + i)
                        .border = { top: { style: 'thin' } }
                }
            })

            rowNumber += 2
            startRowNumber = rowNumber

            for (let status in report.outDrivers) {
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber)
                    .value = `${status} (${report.outDrivers[status].length})`
                rowNumber++
                startRowNumber = rowNumber
                report.outDrivers[status]
                    .sort((a, b) => (a.tabnumber - b.tabnumber))
                    .forEach((driver, index) => {
                        rowNumber = startRowNumber + Math.floor(index / 6)

                        worksheet
                            .getRow(rowNumber)
                            .getCell(startColumnNumber + index % 6)
                            .value = driver.tabnumber
                    })
                rowNumber += 2
            }
            endDriversRow = rowNumber
            
            return endDriversRow
        }

        function drawWorkTable(worksheet, report, row, column) {

            let endDriversRow = row
            let startColumnNumber = column

            worksheet
                .getRow(endDriversRow)
                .getCell(startColumnNumber)
                .value = 'Рабочие'

            rowNumber++

            let returnedRow = drawColumn(
                worksheet,
                report.workTable
                    .sort((a, b) => (a['Автобус'].busnumber - b['Автобус'].busnumber))
                    .slice(0, Math.ceil(report.workTable.length / 2)),
                endDriversRow,
                startColumnNumber
            )
            drawColumn(
                worksheet,
                report.workTable
                    .sort((a, b) => (a['Автобус'].busnumber - b['Автобус'].busnumber))
                    .slice(Math.ceil(report.workTable.length / 2)),
                endDriversRow,
                startColumnNumber + 6
            )

            return returnedRow

            function drawColumn(worksheet, workTable, row, column) {
                rowNumber = row
                startColumnNumber = column

                rowNumber++

                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber)
                    .value = 'Автобус'
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber + 2)
                    .value = 'Первая'
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber + 3)
                    .value = 'Вторая'
                worksheet
                    .getRow(rowNumber)
                    .getCell(startColumnNumber + 4)
                    .value = 'Полный'

                rowNumber++
                startRowNumber = rowNumber

                workTable
                    .forEach((row, index) => {
                        rowNumber = startRowNumber + index
                        worksheet
                            .getRow(rowNumber)
                            .getCell(startColumnNumber)
                            .value = row['Автобус'].busnumber
                        worksheet
                            .getRow(rowNumber)
                            .getCell(startColumnNumber + 2)
                            .value = row['Первая см.'].map(driver => driver.tabnumber).join(', ')
                        worksheet
                            .getRow(rowNumber)
                            .getCell(startColumnNumber + 3)
                            .value = row['Вторая см.'].map(driver => driver.tabnumber).join(', ')
                        worksheet
                            .getRow(rowNumber)
                            .getCell(startColumnNumber + 4)
                            .value = row['Рабочий'].map(driver => driver.tabnumber).join(', ')
                        for (let i = 0; i < 5; i++) {
                            worksheet
                                .getRow(rowNumber)
                                .getCell(startColumnNumber + i)
                                .border = { top: { style: 'thin' } }
                        }
                    })
                return rowNumber
            }
        }
    }
}

export class A4Excel {
    static async render({ buses, template, month }) {

        let year = '2019'

        let sortedBuses = Array.from(buses)
        sortedBuses = sortedBuses.sort((a, b) => {
            return a.busnumber - b.busnumber
        })

        let listCount = Math.ceil(sortedBuses.length / 5)
        let pages = []

        for (let i = 0; i < listCount; i++) {
            pages.push([])
            for (let j = 0; j < 5; j++) {
                pages[i].push(sortedBuses[i * 5 + j] || {})
            }
        }

        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        var worksheet = workbook.getWorksheet('Page 1')

        for (let i = 1; i < pages.length; i++) {
            let copySheet = workbook.addWorksheet("Sheet")
            copySheet.model = Object.assign(worksheet.model, {
                mergeCells: worksheet.model.merges
            });
            copySheet.name = "Page " + (1 + i)
        }

        for (let i = 0; i < pages.length; i++) {
            worksheet = workbook.getWorksheet('Page ' + (i + 1))
            let rowNumber = 10
            let columnNumber = 2

            worksheet.getRow(1)
                .getCell(44)
                .value = i + 1

            pages[i].forEach((bus, index) => {
                if (!bus.busnumber) {
                    return
                }

                drawBus(worksheet, bus, rowNumber + index * 8, columnNumber)
            })
        }

        return await workbook.xlsx.writeBuffer()

        function drawBus(worksheet, bus, row, column) {
            let rowNumber = row
            let columnNumber = column

            worksheet.getRow(rowNumber)
                .getCell(columnNumber)
                .value = bus.busnumber

            let shifts = []
            switch (bus.drivers.length) {
                case 1:
                    shifts = [4]
                    break
                case 2:
                    shifts = [2, 6]
                    break
                case 3:
                    shifts = [1, 4, 7]
                    break
                case 4:
                    shifts = [1, 3, 5, 7]
                    break
            }

            bus.drivers.forEach((driverData, index) => {
                if (!driverData.tabnumber) {
                    return
                }
                let driver = new Driver(driverData)
                drawDriver(worksheet, driver, rowNumber + shifts[index], columnNumber)
            })

            if (!bus.way) {
                return
            }

            worksheet.getRow(rowNumber)
                .getCell(41)
                .value = `Выход: ${bus.way.route.title}/${bus.way.title}`

            worksheet.getRow(rowNumber + 2)
                .getCell(41)
                .value = `1 смена: ${bus.way.times.durationFirstSmene || ''}`

            worksheet.getRow(rowNumber + 2)
                .getCell(44)
                .value = `2 смена: ${bus.way.times.durationSecondSmene || ''}`

            worksheet.getRow(rowNumber + 3)
                .getCell(41)
                .value = `Выезд из парка: ${bus.way.times.outPark || ''}`

            worksheet.getRow(rowNumber + 4)
                .getCell(41)
                .value = `Время смены: ${bus.way.times.change || ''}`

            worksheet.getRow(rowNumber + 5)
                .getCell(41)
                .value = `Окончание работы: ${bus.way.times.endWork || ''}`

            worksheet.getRow(rowNumber + 7)
                .getCell(41)
                .value = `1 смена: ${bus.way.times.lunchFirstSmene || ''}`

            worksheet.getRow(rowNumber + 7)
                .getCell(44)
                .value = `2 смена: ${bus.way.times.lunchSecondSmene || ''}`

            function drawDriver(worksheet, driver, row, column) {
                let rowNumber = row
                let columnNumber = column

                worksheet.getRow(rowNumber)
                    .getCell(columnNumber + 3)
                    .value = driver.shortName
                worksheet.getRow(rowNumber)
                    .getCell(columnNumber + 4)
                    .value = driver.tabnumber

                let number_of_days = moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
                let statuses = driver.statusesByDate({ date: `${year}-${month}-01`, count: number_of_days, isShort: true })

                for (let i = 0; i < number_of_days; i++) {
                    worksheet.getRow(rowNumber)
                        .getCell(columnNumber + 8 + i)
                        .value = statuses[i]
                }
            }
        }
    }
}

export class A3Excel {
    static async render({ buses, template, month }) {
        let year = '2019'

        let sortedBuses = Array.from(buses)
        sortedBuses = sortedBuses.sort((a, b) => {
            return a.busnumber - b.busnumber
        })

        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        let listCount = Math.ceil(sortedBuses.length / 4)
        if (listCount % 2 == 0) {
            listCount++
        }

        let pages = []
        for (let i = 0; i < listCount; i++) {
            pages.push([])
            for (let j = 0; j < 4; j++) {
                pages[i].push(sortedBuses[i * 4 + j] || {})
            }
        }
        // Вставить в начало, чтобы оборот первого листа был пустым
        pages.unshift([{}, {}, {}, {}])
        let N = pages.length

        var worksheet = workbook.getWorksheet('Page 1')
        for (let i = 1; i < N; i++) {
            let copySheet = workbook.addWorksheet("Sheet")
            copySheet.model = Object.assign(worksheet.model, {
                mergeCells: worksheet.model.merges
            });
            copySheet.name = "Page " + (1 + i)
        }

        for (let i = 0; i < N / 2; i++) {
            worksheet = workbook.getWorksheet('Page ' + (i * 2 + 1))

            drawLeft(worksheet, pages[i + 1])
            drawRight(worksheet, pages[N - (i + 1)])

            worksheet = workbook.getWorksheet('Page ' + (i * 2 + 2))

            drawLeft(worksheet, pages[(N - i) % N])
            drawRight(worksheet, pages[i])
        }

        return await workbook.xlsx.writeBuffer();

        function drawLeft(worksheet, page) {
            let rowNumber = 9
            let columnNumber = 2

            page.forEach((bus) => {
                drawLeftBus(worksheet, bus, rowNumber, columnNumber)
                rowNumber += 8
            })

            function drawLeftBus(worksheet, bus, row, column) {
                let rowNumber = row
                let columnNumber = column

                if (!bus.busnumber) {
                    return
                }

                worksheet.getRow(rowNumber)
                    .getCell(columnNumber)
                    .value = bus.busnumber

                let shifts = []
                switch (bus.drivers.length) {
                    case 1:
                        shifts = [4]
                        break
                    case 2:
                        shifts = [2, 6]
                        break
                    case 3:
                        shifts = [1, 4, 7]
                        break
                    case 4:
                        shifts = [1, 3, 5, 7]
                        break
                }

                bus.drivers.forEach((driverData, index) => {
                    let driver = new Driver(driverData)
                    drawLeftDriver(worksheet, driver, rowNumber + shifts[index], columnNumber)
                })

                function drawLeftDriver(worksheet, driver, row, column) {
                    let rowNumber = row
                    let columnNumber = column

                    worksheet.getRow(rowNumber)
                        .getCell(columnNumber + 1)
                        .value = driver.shortName
                    worksheet.getRow(rowNumber)
                        .getCell(columnNumber + 2)
                        .value = driver.tabnumber

                    let statuses = driver.statusesByDate({ date: `${year}-${month}-01`, count: 12, isShort: true })

                    for (let i = 0; i < 12; i++) {
                        worksheet.getRow(rowNumber)
                            .getCell(columnNumber + 4 + i)
                            .value = statuses[i]
                    }

                }
            }
        }
        function drawRight(worksheet, page) {
            let rowNumber = 9
            let columnNumber = 20

            page.forEach((bus) => {
                drawRightBus(worksheet, bus, rowNumber, columnNumber)
                rowNumber += 8
            })

            function drawRightBus(worksheet, bus, row, column) {
                let rowNumber = row
                let columnNumber = column

                if (!bus.busnumber) {
                    return
                }

                let shifts = []
                switch (bus.drivers.length) {
                    case 1:
                        shifts = [4]
                        break
                    case 2:
                        shifts = [2, 6]
                        break
                    case 3:
                        shifts = [1, 4, 7]
                        break
                    case 4:
                        shifts = [1, 3, 5, 7]
                        break
                }

                bus.drivers.forEach((driverData, index) => {
                    let driver = new Driver(driverData)

                    let number_of_days = moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
                    let statuses = driver.statusesByDate({ date: `${year}-${month}-13`, count: number_of_days - 12, isShort: true })

                    for (let i = 0; i < number_of_days - 12; i++) {
                        worksheet.getRow(rowNumber + shifts[index])
                            .getCell(columnNumber + i)
                            .value = statuses[i]
                    }
                })

                if (!bus.way) {
                    return
                }

                worksheet.getRow(rowNumber)
                    .getCell(columnNumber + 19)
                    .value = `Выход: ${bus.way.route.title}/${bus.way.title}`

                worksheet.getRow(rowNumber + 2)
                    .getCell(columnNumber + 19)
                    .value = `1 смена: ${bus.way.times.durationFirstSmene || ''}`

                worksheet.getRow(rowNumber + 2)
                    .getCell(columnNumber + 22)
                    .value = `2 смена: ${bus.way.times.durationSecondSmene || ''}`

                worksheet.getRow(rowNumber + 3)
                    .getCell(columnNumber + 19)
                    .value = `Выезд из парка: ${bus.way.times.outPark || ''}`

                worksheet.getRow(rowNumber + 4)
                    .getCell(columnNumber + 19)
                    .value = `Время смены: ${bus.way.times.change || ''}`

                worksheet.getRow(rowNumber + 5)
                    .getCell(columnNumber + 19)
                    .value = `Окончание работы: ${bus.way.times.endWork || ''}`

                worksheet.getRow(rowNumber + 7)
                    .getCell(columnNumber + 19)
                    .value = `1 смена: ${bus.way.times.lunchFirstSmene || ''}`

                worksheet.getRow(rowNumber + 7)
                    .getCell(columnNumber + 22)
                    .value = `2 смена: ${bus.way.times.lunchSecondSmene || ''}`

            }
        }

    }
}

