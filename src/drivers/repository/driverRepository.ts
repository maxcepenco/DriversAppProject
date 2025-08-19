import {Driver} from "../types/driver";
import {db} from "../../db/db";


export const driversRepository = {
    findAllDrivers(): Driver[] {
      return db.drivers.map(driver =>({...driver}))
 }
}
