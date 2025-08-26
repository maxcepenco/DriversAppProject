import {body} from "express-validator";
import {Currency} from "../../rides/types/Ride";

export const clientNameValidation = body('clientName')
.isString()
.withMessage('ClientName must be a string')
.trim()
.isLength({ min:3 ,max: 100 })
.withMessage( 'Length must be a not correct ')

export const priceValidation = body('price')
.isFloat({gt:0})
.withMessage('Price must be a number positive')

export const currencyValidation = body('currency')
.isString()
.withMessage('Currency must be a string')
.trim()
.isIn(Object.values(Currency))
.withMessage('Currency must be either "usd" or "eur"')

export const driverIdValidation = body('driverId')
.isInt({gt:0})
.withMessage('DriverId must be a number positive')

export const fromAddressValidation = body('fromAddress')
.isString()
.withMessage('FromAddress must be a string')
.trim()
.isLength({ min:10 ,max:200 })


export const toAddressValidation = body('toAddress')
.isString()
.withMessage('ToAddress must be a string')
.trim()
.isLength({ min:10 ,max:200 })

export const rideInputDtoValidation = [
    clientNameValidation,
    priceValidation,
    currencyValidation,
    driverIdValidation,
    toAddressValidation,
    fromAddressValidation,
]