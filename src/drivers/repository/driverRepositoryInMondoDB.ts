import {Driver} from "../types/driver";
import {db} from "../../db/db";
import {DriverInputDto} from "../dto/driver.input-dto";
import {ObjectId,WithId} from "mongodb";
import {driverCollection} from "../../db/mongoDb";
import {Ride} from "../../rides/types/Ride";

export const driversRepository = {
   async findAll(): Promise<WithId<Driver>[]> {
       return driverCollection.find().toArray();
   },

    async findById(id: string): Promise<WithId<Driver> | null> {
       return driverCollection.findOne({_id: new ObjectId(id)})
    },



    async  create(newDriver: Driver): Promise<WithId<Driver>> {
       const insertResult = await driverCollection.insertOne(newDriver);
       return{...newDriver, _id: insertResult.insertedId};
 },

   async updateDriver(id: string, dto: DriverInputDto):Promise <void> {
        const updateResult = await driverCollection.updateOne(
            {_id: new ObjectId(id)},
            {$set: {
                name: dto.name,
                phoneNumber: dto.phoneNumber,
                email: dto.email,
                vehicle:{
                    make: dto.vehicleMake,
                    model: dto.vehicleModel,
                    year: dto.vehicleYear,
                    licensePlate:dto.vehicleLicensePlate,
                    description: dto.vehicleDescription,
                    features: dto.vehicleFeatures,
                }
                }
            }
            )
if(updateResult.matchedCount < 1) {
    throw new Error('Driver not exist');
}
 return
    },

   async deleteDriver(id: string):Promise<void> {

    const deleteResult = await driverCollection.deleteOne({_id: new ObjectId(id)})
       if(deleteResult.deletedCount < 1) {
           throw  new Error('Driver not exist')
       }
   }

}
