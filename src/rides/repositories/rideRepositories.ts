import {Ride} from "../types/Ride";
import {db} from "../../db/db";
import {RiderInputDto} from "../dto/RiderInputDto";


export const rideRepositories = {
    findAllRide(): Ride[] {
        return db.rides.map(ride => ({...ride}))
    },
    findRideById(id: number): Ride | null {
        return  db.rides.find(ride => ride.id == id) ?? null
    },
    createRide(ride:RiderInputDto): Ride | null {
        const driver = db.drivers.find( d =>(d.id) === ride.driverId )
        if (!driver) {
            return  null
        }
       const newRide = {
           id: db.rides.length ? db.rides[db.rides.length - 1].id + 1 : 1,
           clientName:ride.clientName,
           driverId:ride.driverId,
           driverName: driver.name,
           vehicleLicensePlate:driver.vehicleLicensePlate,
           vehicleName:`${driver.vehicleMake} ${driver.vehicleModel}`,
           price: ride.price,
           currency:ride.currency,
           createAt :new Date(),
           updateAt :null,
           addresses: {
               from: ride.fromAddress,
               to: ride.toAddress,
           }
       }
         db.rides.push(newRide)
        return newRide
    }
}