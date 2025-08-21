import {Router} from "express";
import {CreateDriverHandler} from "./handlers/CreateDriverHandler";
import {GetDriverListHandler} from "./handlers/GetDriverListHandler";
import {getDriverHandler} from "./handlers/getDriverHandler";
import {updateDriverHandler} from "./handlers/UpdateDriverHandler";
import {deleteDriverHandler} from "./handlers/DeleteDriverHandler";
import {driverInputDtoValidation} from "../../core/middleware/BodyInputValidationMiddleware";
import {inputValidationResultMiddleware} from "../../core/middleware/garbenErrorsResultValidation";
import {validationParamsIdMiddleware} from "../../core/middleware/validationParamsIdMiddleware";
import {superAdminGuardMiddleware} from "../../core/middleware/suberAdminGuardMiddleware";


export const driversRouter = Router({})

    driversRouter

        .get('', GetDriverListHandler)

        .post(
            '',
            superAdminGuardMiddleware,
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
            superAdminGuardMiddleware,
            driverInputDtoValidation,
            inputValidationResultMiddleware,
            updateDriverHandler
        )

        .delete(
            '/:id',
            superAdminGuardMiddleware,
            validationParamsIdMiddleware,
            inputValidationResultMiddleware,
            deleteDriverHandler
        )


