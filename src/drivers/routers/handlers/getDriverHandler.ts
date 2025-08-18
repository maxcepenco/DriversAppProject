import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {RequestWithParams} from "../../../core/utils/reuqestParams";
import {db} from "../../../db/db";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {Response} from "express";

export const getDriverHandler = (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
    const id = parseInt(req.params.id)
    const driver = db.drivers.find(d => d.id ===id)

    if(!driver) {
        res
            .status(HttpStatuses.NotFound_404)
            .send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
        return
    }
    res.status(HttpStatuses.Ok_200).send(driver)
}