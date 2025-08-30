import {RequestWithBody} from "../../../core/utils/reuqestParams";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {driversRepository} from "../../repository/driverRepositoryInMondoDB";
import {mapToDriverViewModel} from "../mappers/map-to-driver-view-model";
import {Driver} from "../../types/driver";


export const CreateDriverHandler = async (req:RequestWithBody<DriverInputDto>, res:Response)=> {
  try{
      const newDriver: Driver = {
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          vehicle:{
              make: req.body.vehicleMake,
              model: req.body.vehicleModel,
              year: req.body.vehicleYear,
              licensePlate: req.body.vehicleLicensePlate,
              description: req.body.vehicleDescription,
              features: req.body.vehicleFeatures
          },
          createdAt: new Date(),
      }

      const createdDriver = await driversRepository.create(newDriver)
      const driverViewModel = mapToDriverViewModel(createdDriver)
      res.status(HttpStatuses.Created_201).send(driverViewModel);
  } catch(e){
      res.sendStatus(HttpStatuses.InternalServerError_500);
  }
}





