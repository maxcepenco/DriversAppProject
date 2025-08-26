import {Router} from "express";
import {superAdminGuardMiddleware} from "../../core/middleware/suberAdminGuardMiddleware";
import {idValidation} from "../../core/middleware/idValidation";
import {inputValidationResultMiddleware} from "../../core/middleware/garbenErrorsResultValidation";
import {rideInputDtoValidation} from "../../core/middleware/riderInputDtoValidation";
import {createRide} from "./handlers/createRide";
import {findAllRides} from "./handlers/findAllRide";
import {findRideById} from "./handlers/findRideById";


export const riderRouter = Router({})

riderRouter.use(superAdminGuardMiddleware)

riderRouter
    .get('', findAllRides )
    .get('/:id',idValidation,inputValidationResultMiddleware,findRideById)
    .post('',rideInputDtoValidation,inputValidationResultMiddleware, createRide)