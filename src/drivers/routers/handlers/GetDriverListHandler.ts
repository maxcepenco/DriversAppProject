import {HttpStatuses} from "../../../core/utils/http-statuses";
import {Request, Response} from "express";
import {driversRepository} from "../../repository/driverRepositoryInMemory";


export const GetDriverListHandler =async (req:Request, res:Response)=> {
    const driversList = await driversRepository.findAllDrivers();
    res.status(HttpStatuses.Ok_200).send(driversList);

}