import Excel from "exceljs/dist/exceljs"

export class AgreementExcel {
    static async render({ drivers, template }) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(template)

        var worksheet = workbook.getWorksheet('main')
        worksheet.getRow(1)
            .getCell(1)
            .value = `Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную работу за пределами установленной продолжительности рабочего времени (баланса), а так же работу в выходные, праздничные дни в августе  2019  года.`

        var rowNumber = 3
        var columnNumber
        drivers.forEach(driver => {
            columnNumber = 2
            worksheet.getRow(rowNumber)
                .getCell(columnNumber)
                .value = driver.tabnumber
            columnNumber = 3
            worksheet.getRow(rowNumber)
                .getCell(columnNumber)
                .value = driver.name
            rowNumber++
        })

        return await workbook.xlsx.writeBuffer();
    }
}

// export class A4Excel extends ExcelRenderer {
//     constructor(template) {
//         super(template)
//     }
//     static async getData() {
//         const getDrivers = $axios.get(`http://134.0.119.170/api/drivers`)
//         const getTemplate = $axios.get("/a4.xlsx", {
//             responseType: "arraybuffer"
//         })

//         const [driversRes, templateRes] = await Promise.all([getDrivers, getTemplate])

//         const drivers = driversRes.data
//         const template = templateRes.data
//         return { drivers, template }
//     }
//     static async render() {
//         const { drivers, template } = await this.getData()
//         const workbook = new Excel.Workbook();
//         await workbook.xlsx.load(template)

//         var worksheet = workbook.getWorksheet('main')
//         var row
//         var rowNumber = 10
//         var columnNumber
//         drivers.forEach(driver => {
//             row = worksheet.getRow(rowNumber)

//             columnNumber = 3
//             row.getCell(columnNumber)
//                 .value = driver.name
//             columnNumber = 6
//             row.getCell(columnNumber)
//                 .value = driver.tabnumber

//             columnNumber = 10
//             new Driver(driver).statusesByDate('2019-09-01', 30, true)
//                 .forEach((status) => {
//                     row.getCell(columnNumber)
//                         .value = status
//                     columnNumber++
//                 })
//             rowNumber++
//         })

//         return await workbook.xlsx.writeBuffer();
//     }
// }

// export class A3Excel extends ExcelRenderer {
//     constructor(template) {
//         super(template)
//     }
//     static async getData() {
//         const getDrivers = $axios.get(`http://134.0.119.170/api/drivers`)
//         const getTemplate = $axios.get("/a3.xlsx", {
//             responseType: "arraybuffer"
//         })

//         const [driversRes, templateRes] = await Promise.all([getDrivers, getTemplate])

//         const drivers = driversRes.data
//         const template = templateRes.data
//         return { drivers, template }
//     }
//     static async render() {
//         const { drivers, template } = await this.getData()
//         const workbook = new Excel.Workbook();
//         await workbook.xlsx.load(template)

//         var worksheet = workbook.getWorksheet('main')

//         var row
//         var rowNumber = 10
//         var columnNumber
//         drivers.forEach(driver => {
//             row = worksheet.getRow(rowNumber)

//             columnNumber = 3
//             row.getCell(columnNumber)
//                 .value = driver.name
//             columnNumber = 6
//             row.getCell(columnNumber)
//                 .value = driver.tabnumber

//             columnNumber = 10
//             new Driver(driver).statusesByDate('2019-09-01', 30, true)
//                 .forEach((status) => {
//                     row.getCell(columnNumber)
//                         .value = status
//                     columnNumber++
//                 })
//             rowNumber++
//         })

//         return await workbook.xlsx.writeBuffer();
//     }
// }

