import {RequestWithParamsAndBody} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../dto/driver.uri-params-dto";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {createErrorMessage} from "../../../core/utils/error.utils";
import {driversRepository} from "../../repository/driverRepositoryInMondoDB";


export const updateDriverHandler = async (req:RequestWithParamsAndBody<UriParamsInputDto,DriverInputDto>, res:Response) =>{
    try {
        const id = req.params.id;
        const driver = driversRepository.findById(id);

        if (!driver) {
            res
                .status(HttpStatuses.NotFound_404)
                .send(
                    createErrorMessage([{ field: 'id', message: 'Driver not found' }]),
                );
            return;
        }

        await driversRepository.updateDriver(id, req.body);
        res.sendStatus(HttpStatuses.NoContent_204);
    } catch (e: unknown) {
        res.sendStatus(HttpStatuses.InternalServerError_500);
    }
}