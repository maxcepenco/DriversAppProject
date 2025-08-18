import {RequestWithParams} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {db} from "../../../db/db";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {Response} from "express";


export const deleteDriverHandler = (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
    const id = parseInt(req.params.id)
    const driverExist = db.drivers.some(d => d.id === id)

    if(!driverExist) {
        res.status(HttpStatuses.NotFound_404)
        res.send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
    }

    db.drivers.filter(d => d.id !== id)

    res.sendStatus(HttpStatuses.NoContent_204)

}