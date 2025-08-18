import {Router,Request,Response} from "express";
import {HttpStatuses} from "../../core/utils/http-statuses";
import {db} from "../../db/db";
import {UriParamsInputDto} from "../dto/driver.uri-params-dto";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from "../../core/utils/reuqestParams";
import {createErrorMessage} from "../../core/utils/error.utils";
import {vehicleInputDtoValidation} from "../../validation/vehicleInputDtoValidation";
import {DriverInputDto} from "../dto/driver.input-dto";
import {Driver} from "../types/driver";
import {CreateDriverHandler} from "./handlers/CreateDriverHandler";
import {GetDriverListHandler} from "./handlers/GetDriverListHandler";
import {getDriverHandler} from "./handlers/getDriverHandler";
import {updateDriverHandler} from "./handlers/UpdateDriverHandler";
import {deleteDriverHandler} from "./handlers/DeleteDriverHandler";


export const driversRouter = Router({})

    driversRouter
        .post('',CreateDriverHandler)
        .get('', GetDriverListHandler)
        .get('/:id', getDriverHandler)
        .put('/:id', updateDriverHandler)
        .delete('/:id', deleteDriverHandler)


