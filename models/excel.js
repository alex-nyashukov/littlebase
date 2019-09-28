import Excel from "exceljs/dist/exceljs"

import Driver from '@/models/driver'
import { browser } from "process/browser";



export class AgreementExcel {
    static async render({ drivers, template, month }) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        var worksheet = workbook.getWorksheet('main')
        worksheet.getRow(1)
            .getCell(1)
            .value = `Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, \
предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную \
работу за пределами установленной продолжительности рабочего времени (баланса), \
а так же работу в выходные, праздничные дни в ${month} месяце 2019  года.`

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
            if(rowNumber == 51) {
                rowNumber = 3
                globalColumnNumber++
            }
        })

        return await workbook.xlsx.writeBuffer();
    }
}

export class A4Excel {
    static async render({ drivers, template }) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        var worksheet = workbook.getWorksheet('main')
        var row
        var rowNumber = 10
        var columnNumber
        drivers.forEach(driver => {
            row = worksheet.getRow(rowNumber)

            columnNumber = 3
            row.getCell(columnNumber)
                .value = driver.name
            columnNumber = 6
            row.getCell(columnNumber)
                .value = driver.tabnumber

            columnNumber = 10
            new Driver(driver).statusesByDate('2019-09-01', 30, true)
                .forEach((status) => {
                    row.getCell(columnNumber)
                        .value = status
                    columnNumber++
                })
            rowNumber++
        })

        return await workbook.xlsx.writeBuffer();
    }
}

export class A3Excel {
    static async render({ buses, template }) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        let listCount = Math.ceil(buses.length/4)
        if(listCount%2 == 0) {
            listCount++
        }
        
        let pages = []
        for(let i=0; i<listCount; i++) {
            pages.push([])
            for(let j=0; j<4; j++) {
                pages[i].push(buses[i*4+j] || {})
            }
        }
        // Вставить в начало, чтобы оборот первого листа был пустым
        pages.unshift([{}, {}, {}, {}])
        let N = pages.length

        var worksheet = workbook.getWorksheet('Page 1')
        for(let i=1; i<N; i++) {
            let copySheet = workbook.addWorksheet("Sheet")
            copySheet.model = Object.assign(worksheet.model, {
                mergeCells: worksheet.model.merges
              });
            copySheet.name = "Page " + (1 + i)
        }

        for(let i=0; i<N/2; i++) {
            worksheet = workbook.getWorksheet('Page ' + (i*2 + 1))

            drawLeft(worksheet, pages[i+1])
            drawRight(worksheet, pages[N-(i+1)])

            worksheet = workbook.getWorksheet('Page ' + (i*2 + 2))
            
            drawLeft(worksheet, pages[(N-i)%N])
            drawRight(worksheet, pages[i])
        }
        
        return await workbook.xlsx.writeBuffer();

        function drawLeft(worksheet, page) {
            let rowNumber = 9
            let columnNumber = 2

            page.forEach((bus) => {
                drawBus(worksheet, bus, rowNumber, columnNumber)
                rowNumber += 8
            })
        }
        function drawRight(worksheet, page) {
            
        }
        function drawBus(worksheet, bus, row, column) {
            let rowNumber = row
            let columnNumber = column

            if(!bus.busnumber) {
                return
            }

            worksheet.getRow(rowNumber)
                .getCell(columnNumber)
                .value = bus.busnumber
            
            let shifts = []
            switch(bus.drivers.length) {
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

                worksheet.getRow(rowNumber + shifts[index])
                    .getCell(columnNumber + 1)
                    .value = driver.shortName
                worksheet.getRow(rowNumber + shifts[index])
                    .getCell(columnNumber + 2)
                    .value = driver.tabnumber
            })
        }
    }
}

