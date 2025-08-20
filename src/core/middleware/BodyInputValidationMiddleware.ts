import {body} from "express-validator";
import {VehicleFeature} from "../../drivers/types/driver";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const  nameValidation = body('name')
    .isString()
    .withMessage('name should be string')
    .trim()
    .isLength({ min: 2, max: 15 })
    .withMessage('Length of name is not correct')

const phoneValidation = body('phoneNumber')
    .isString()
    .withMessage('phoneNumber should be string')
    .trim()
    .isLength({ min: 8, max: 15 })
    .withMessage('Length of phoneNumber is not correct')

const emailValidation = body('email')
    .isString()
    .withMessage('email should be string')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Length of email is not correct')
    .matches(EMAIL_REGEX)
    .isEmail()

const vehicleMakeValidation = body('vehicleMake')
    .isString()
    .withMessage('vehicleMaker should be string')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Length of vehicleMake is not correct')

const vehicleModelValidation = body('vehicleModel')
    .isString()
    .withMessage('vehicleModel should be string')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('vehicleModel should be real year')

const currentYear = new Date().getFullYear()
const vehicleYearValidation = body('vehicleYear')
    .isInt({min: 1980, max:currentYear})
    .withMessage('vehicleYear should be real year')

const vehicleLicenseValidation = body('vehicleLicensePlate')
    .isString()
    .withMessage('vehicleLicensePlate should be string')
    .trim()
    .isLength({ min: 6, max: 10 })
    .withMessage('Length of vehicleLicense is not correct')

const vehicleDescription = body('vehicleDescription')
    .optional({nullable: true})
    .isString()
    .withMessage('vehicleDescription should be string')
    .trim()
    .isLength({min: 10, max: 200})
    .withMessage('Length of vehicleDescription is not correct')

const vehicleFeaturesValidation = body('vehicleFeatures')
    .isArray()
    .withMessage('vehicleFeatures should be array')
    .optional()
    .custom((vehicleFeatures:Array<VehicleFeature>) => {
        if(vehicleFeatures.length) {
            const validFeature = Object.values(VehicleFeature)

    vehicleFeatures.forEach((feature) => {
        if( !validFeature.includes(feature)) {
            throw new Error('vehicleFeatures should contain values of VehicleFeature')
        }
    })
}
        return true
})

export const driverInputDtoValidation = [
    nameValidation,
    phoneValidation,
    emailValidation,
    vehicleMakeValidation,
    vehicleModelValidation,
    vehicleYearValidation,
    vehicleLicenseValidation,
    vehicleDescription,
    vehicleFeaturesValidation,
]