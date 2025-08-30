import {rideRepositories} from "../../repositories/rideRepositories";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {Request, Response} from "express";


export const findAllRides = async (req:Request, res: Response) => {
    const foundRides = rideRepositories.findAllRide()
    res.status(HttpStatuses.Ok_200).send(foundRides)
}