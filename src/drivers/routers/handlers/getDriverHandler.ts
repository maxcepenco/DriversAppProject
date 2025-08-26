import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {RequestWithParams} from "../../../core/utils/reuqestParams";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {Response} from "express";
import {driversRepository} from "../../repository/driverRepository";

export const getDriverHandler = (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
    const id = Number(req.params.id)
    if (!Number.isInteger(id) || id <= 0) {
        return res
            .status(HttpStatuses.BadRequest_400)
            .send(createErrorMessage([{ field: 'id', message: 'Invalid id' }]))
    }
    const driver = driversRepository.getDriverById(id)
    if(!driver) {
        res
            .status(HttpStatuses.NotFound_404)
            .send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
        return
    }
    res.status(HttpStatuses.Ok_200).send(driver)
}