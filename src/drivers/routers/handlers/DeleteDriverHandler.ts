import {RequestWithParams} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {Response} from "express";
import {driversRepository} from "../../repository/driverRepositoryInMemory";
import {rideRepositories} from "../../../rides/repositories/rideRepositories";


export const deleteDriverHandler = async (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
   try{
       const id = req.params.id;
       const driver = await driversRepository.findOne(id);
           if(!driver){
               res
                   .status(HttpStatuses.NotFound_404)
                   .send(createErrorMessage([{ field: 'id', message: 'Driver not found' }]));
               return
           }

           const activeRide = await rideRepositories.findActiveRideByDriverId()

   }catch {

   }
}