import {Driver} from "../../types/driver";
import {WithId} from "mongodb";
import {DriverViewModel} from "../../dto/DriverViewModel";


export function mapToDriverViewModel(driver: WithId<Driver>): DriverViewModel {
return {
    id:driver._id.toString(),
    name:driver.name,
    phoneNumber: driver.phoneNumber,
    email: driver.email,
    vehicle: driver.vehicle,
    createdAt: driver.createdAt,

}
}