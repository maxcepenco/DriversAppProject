import {HttpStatuses} from "../../../core/utils/http-statuses";
import {Request, Response} from "express";
import {driversRepository} from "../../repository/driverRepository";


export const GetDriverListHandler =(req:Request, res:Response)=> {
    const driversList = driversRepository.findAllDrivers();
    res.status(HttpStatuses.Ok_200).send(driversList);

}