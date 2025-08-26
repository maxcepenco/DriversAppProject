import {RequestWithParams} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {Response} from "express";
import {driversRepository} from "../../repository/driverRepository";


export const deleteDriverHandler = (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
    const id = parseInt(req.params.id)
    const isDeleted = driversRepository.deleteDriver(id)


    if(isDeleted) {
       return res.sendStatus(HttpStatuses.NoContent_204)
    }

    res.status(HttpStatuses.NotFound_404)
    res.send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))


}