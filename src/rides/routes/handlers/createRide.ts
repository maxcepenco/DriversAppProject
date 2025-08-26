import {RequestWithBody} from "../../../core/utils/reuqestParams";
import {RiderInputDto} from "../../dto/RiderInputDto";
import {rideRepositories} from "../../repositories/rideRepositories";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {Response} from "express";


export const createRide = (req:RequestWithBody<RiderInputDto>, res:Response) => {
    const newRide = rideRepositories.createRide(req.body)
    if(!newRide) {
        res.status(HttpStatuses.NotFound_404)
        return
    }
    res.status(HttpStatuses.Created_201).send(newRide)

}