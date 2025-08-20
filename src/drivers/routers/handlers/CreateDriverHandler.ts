import {RequestWithBody} from "../../../core/utils/reuqestParams";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {vehicleInputDtoValidation} from "../../../validation/vehicleInputDtoValidation";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {driversRepository} from "../../repository/driverRepository";


export const CreateDriverHandler = (req:RequestWithBody<DriverInputDto>, res:Response)=> {

    const errors = vehicleInputDtoValidation(req.body)
    if(errors.length > 0) {
        res.status(HttpStatuses.BadRequest_400).send(createErrorMessage(errors))
        return
    }

    const createdDriver = driversRepository.createDriver(req.body)
    res.status(HttpStatuses.Created_201).send(createdDriver)
    return;
}





