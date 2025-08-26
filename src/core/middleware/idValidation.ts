import {param} from "express-validator";


export const idValidation = param('id')
    .exists()
    .withMessage('ID is required')
    .isString()
    .withMessage('Id must be a string')
    .isLength({min:1})
    .withMessage('Id must not be a empty')
    .isNumeric()
    .withMessage('Id must be a numeric string')
