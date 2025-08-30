// import {Driver} from "../types/driver";
// import {db} from "../../db/db";
// import {DriverInputDto} from "../dto/driver.input-dto";
//
//
// export const driversRepository = {
//    async findAllDrivers(): Promise<Driver[]> {
//       return db.drivers.map(driver =>({...driver}))
//  },
//
//   async  createDriver(driver: DriverInputDto): Promise<Driver> {
//        const newDriver = {
//            id:db.drivers.length ? db.drivers[db.drivers.length - 1].id + 1 : 1,
//            name: driver.name,
//            phoneNumber: driver.phoneNumber,
//            email:  driver.email,
//            vehicleMake: driver.vehicleMake,
//            vehicleModel: driver.vehicleModel,
//            vehicleYear: driver.vehicleYear,
//            vehicleLicensePlate: driver.vehicleLicensePlate,
//            vehicleDescription: driver.vehicleDescription,
//            vehicleFeatures: driver.vehicleFeatures,
//            createdAt: new Date(),
//        }
//        db.drivers.push(newDriver)
//        return newDriver
// },
//
//    async findById(id: number): Promise<Driver | null> {
//          let driver = db.drivers.find(d => d.id ===id)
//        if(driver){
//            return driver;
//        } else {
//            return null;
//        }
//     },
//
//    async updateDriver(id: number, driver: DriverInputDto):Promise <Driver | null> {
//         const index = db.drivers.findIndex(driver => driver.id == id)
//         if(index === -1) return null
//
//         const exisingDriver = db.drivers[index]
//
//         exisingDriver.email = driver.email
//         exisingDriver.name = driver.name
//         exisingDriver.phoneNumber = driver.phoneNumber
//         exisingDriver.vehicleMake = driver.vehicleMake
//         exisingDriver.vehicleModel = driver.vehicleModel
//         exisingDriver.vehicleYear = driver.vehicleYear
//         exisingDriver.vehicleLicensePlate = driver.vehicleLicensePlate
//         exisingDriver.vehicleDescription = driver.vehicleDescription
//         exisingDriver.vehicleFeatures = driver.vehicleFeatures
//
//         return exisingDriver
//     },
//
//    async deleteDriver(id: number):Promise<boolean> {
//
//         for ( let i = 0; i < db.drivers.length; i++ ) {
//             if(db.drivers[i].id === id) {
//                 db.drivers.splice(i, 1);
//                 return true
//             }
//         }
//         return false
//     }
//
// }
