import {Router} from "express";
import {CreateDriverHandler} from "./handlers/CreateDriverHandler";
import {GetDriverListHandler} from "./handlers/GetDriverListHandler";
import {getDriverHandler} from "./handlers/getDriverHandler";
import {updateDriverHandler} from "./handlers/UpdateDriverHandler";
import {deleteDriverHandler} from "./handlers/DeleteDriverHandler";
import {driverInputDtoValidation} from "../../core/middleware/BodyInputValidationMiddleware";
import {inputValidationResultMiddleware} from "../../core/middleware/garbenErrorsResultValidation";
import {validationParamsIdMiddleware} from "../../core/middleware/validationParamsIdMiddleware";


export const driversRouter = Router({})

    driversRouter

        .get('', GetDriverListHandler)

        .post(
            '',
            driverInputDtoValidation,
            inputValidationResultMiddleware,
            CreateDriverHandler
        )


        .get(
            '/:id',
            validationParamsIdMiddleware,
            inputValidationResultMiddleware,
            getDriverHandler
        )

        .put(
            '/:id',validationParamsIdMiddleware,
            driverInputDtoValidation,
            inputValidationResultMiddleware,
            updateDriverHandler
        )

        .delete(
            '/:id',
            validationParamsIdMiddleware,
            inputValidationResultMiddleware,
            deleteDriverHandler
        )


