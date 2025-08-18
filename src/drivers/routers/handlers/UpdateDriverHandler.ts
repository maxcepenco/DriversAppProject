import {RequestWithParamsAndBody} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {db} from "../../../db/db";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {vehicleInputDtoValidation} from "../../../validation/vehicleInputDtoValidation";


export const updateDriverHandler = (req:RequestWithParamsAndBody<UriParamsInputDto,DriverInputDto>, res:Response) => {
    const id = parseInt(req.params.id)
    const index = db.drivers.findIndex((d) => d.id === id)

    if(index === -1) {
        res
            .status(HttpStatuses.NotFound_404)
            .send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
        return
    }

    const errors = vehicleInputDtoValidation(req.body)

    if(errors.length > 0) {
        res.status(HttpStatuses.BadRequest_400).send(createErrorMessage(errors))
        return
    }

    const driver = db.drivers[index]

    driver.name = req.body.name
    driver.phoneNumber = req.body.phoneNumber
    driver.email = req.body.email
    driver.vehicleMake = req.body.vehicleMake
    driver.vehicleModel = req.body.vehicleModel
    driver.vehicleYear = req.body.vehicleYear
    driver.vehicleLicensePlate = req.body.vehicleLicensePlate
    driver.vehicleDescription = req.body.vehicleDescription
    driver.vehicleFeatures = req.body.vehicleFeatures

    res.sendStatus(HttpStatuses.NoContent_204)
}