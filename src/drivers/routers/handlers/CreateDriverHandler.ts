import {RequestWithBody} from "../../../core/utils/reuqestParams";
import {DriverInputDto} from "../../dto/driver.input-dto";
import {Response} from "express";
import {HttpStatuses} from "../../../core/utils/http-statuses";
import {driversRepository} from "../../repository/driverRepository";


export const CreateDriverHandler = (req:RequestWithBody<DriverInputDto>, res:Response)=> {


    const createdDriver = driversRepository.createDriver(req.body)
    res.status(HttpStatuses.Created_201).send(createdDriver)
    return;
}





