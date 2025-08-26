import {rideRepositories} from "../../repositories/rideRepositories";
import {RequestWithParams} from "../../../core/utils/reuqestParams";
import {UriParamsInputDto} from "../../../drivers/dto/driver.uri-params-dto";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {Response} from "express";

export const findRideById = (req:RequestWithParams< UriParamsInputDto>, res: Response) => {
    const index = + req.params.id
    const foundRide = rideRepositories.findRideById(index)
    if(!foundRide) {
        return res.sendStatus(HttpStatuses.NotFound_404)
    }
    return res.status(HttpStatuses.Ok_200).send(foundRide)
}