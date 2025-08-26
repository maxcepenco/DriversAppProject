import {ValidationErrorType} from "./types/validationError";
import {ValidationErrorDto} from "./types/validationError.dto";
import {FieldValidationError, ValidationError, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {HttpStatuses} from "../utils/http-statuses";

export const createErrorMessage = (errors: ValidationErrorType[]):ValidationErrorDto => {
    return {errorMessages: errors};
}

const formatErrors = (error:ValidationError ):ValidationErrorType => {
    const expressError = error as unknown as FieldValidationError

    return {
        field: expressError.path,
        message:expressError.msg
    }
}

export const inputValidationResultMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const errors = validationResult(req).formatWith(formatErrors).array({onlyFirstError: true})
    if(errors.length > 0) {
        res.status(HttpStatuses.BadRequest_400).json({errorMessages: errors})
        return
    }
    next()
}

