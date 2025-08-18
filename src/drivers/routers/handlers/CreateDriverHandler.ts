import {RequestWithBody} from "../../../core/utils/reuqestParams";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {vehicleInputDtoValidation} from "../../../validation/vehicleInputDtoValidation";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {Driver} from "../../types/driver";
import {db} from "../../../db/db";


export const CreateDriverHandler = (req:RequestWithBody<DriverInputDto>, res:Response)=> {
    const errors = vehicleInputDtoValidation(req.body)

    if(errors.length > 0) {
        res.status(HttpStatuses.BadRequest_400).send(createErrorMessage(errors))
        return
    }

    const newDriver: Driver = {
        id:db.drivers.length ? db.drivers[db.drivers.length - 1].id + 1 : 1,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email:  req.body.email,
        vehicleMake: req.body.vehicleMake,
        vehicleModel: req.body.vehicleModel,
        vehicleYear: req.body.vehicleYear,
        vehicleLicensePlate: req.body.vehicleLicensePlate,
        vehicleDescription: req.body.vehicleDescription,
        vehicleFeatures: req.body.vehicleFeatures,
        createdAt: new Date(),
    }
    db.drivers.push(newDriver)
    res.status(HttpStatuses.Created_201).send(newDriver)
}





