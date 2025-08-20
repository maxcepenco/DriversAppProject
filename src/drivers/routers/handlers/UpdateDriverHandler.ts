import {RequestWithParamsAndBody} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {driversRepository} from "../../repository/driverRepository";


export const updateDriverHandler = (req:RequestWithParamsAndBody<UriParamsInputDto,DriverInputDto>, res:Response) => {
    const id = parseInt(req.params.id)



    const isUpdated = driversRepository.updateDriver(id, req.body)

    if(!isUpdated) {
        res
            .status(HttpStatuses.NotFound_404)
            .send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
        return
    }



    res.sendStatus(HttpStatuses.NoContent_204)
}