import {Driver} from "../types/driver";
import {db} from "../../db/db";
import {DriverInputDto} from "../dto/driver.input-dto";


export const driversRepository = {
    findAllDrivers(): Driver[] {
      return db.drivers.map(driver =>({...driver}))
 },

    createDriver(driver: DriverInputDto): Driver {
       const newDriver = {
           id:db.drivers.length ? db.drivers[db.drivers.length - 1].id + 1 : 1,
           name: driver.name,
           phoneNumber: driver.phoneNumber,
           email:  driver.email,
           vehicleMake: driver.vehicleMake,
           vehicleModel: driver.vehicleModel,
           vehicleYear: driver.vehicleYear,
           vehicleLicensePlate: driver.vehicleLicensePlate,
           vehicleDescription: driver.vehicleDescription,
           vehicleFeatures: driver.vehicleFeatures,
           createdAt: new Date(),
       }
       db.drivers.push(newDriver)
       return newDriver
},

    getDriverById(id: number): Driver | undefined {
         return  db.drivers.find(d => d.id ===id)
    },

    updateDriver(id: number, driver: DriverInputDto) {
        const index = db.drivers.findIndex(driver => driver.id == id)
        if(index === -1) return undefined

        const exisingDriver = db.drivers[index]

        exisingDriver.email = driver.email
        exisingDriver.phoneNumber = driver.phoneNumber
        exisingDriver.vehicleMake = driver.vehicleMake
        exisingDriver.vehicleModel = driver.vehicleModel
        exisingDriver.vehicleYear = driver.vehicleYear
        exisingDriver.vehicleLicensePlate = driver.vehicleLicensePlate
        exisingDriver.vehicleDescription = driver.vehicleDescription
        exisingDriver.vehicleFeatures = driver.vehicleFeatures

        return exisingDriver
    },

    deleteDriver(id: number) {

        for ( let i = 0; i < db.drivers.length; i++ ) {
            if(db.drivers[i].id === id) {
                db.drivers.splice(i, 1);
                return true
            }
        }
        return false
    }

}
