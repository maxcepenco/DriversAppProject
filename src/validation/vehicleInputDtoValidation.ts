import {DriverInputDto} from "../drivers/dto/driver.input-dto";
import {ValidationError} from "../drivers/types/validationError";
import {VehicleFeature} from "../drivers/types/driver";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const vehicleInputDtoValidation = (data: DriverInputDto): ValidationError[] => {
    const error: ValidationError[] = [];
    if (
        !data.name ||
        typeof data.name !== 'string' ||
        data.name.trim().length < 2 ||
        data.name.trim().length > 15
    ) {
        error.push({field: 'name', message: 'Invalid name'})
    }

    if(
        !data.phoneNumber ||
        typeof data.phoneNumber !== 'string' ||
        data.phoneNumber.trim().length < 8 ||
        data.phoneNumber.trim().length > 15
    ) {
        error.push({field:'phoneNumber', message:'Invalid phone number'})
    }

    if (
        !data.email ||
        typeof data.email !=='string' ||
        data.email.trim().length < 5 ||
        data.email.trim().length > 100 ||
        !EMAIL_REGEX.test(data.email)
    ) {
        error.push({field: 'email', message: 'Invalid email'})
    }

    if(
        !data.vehicleMake ||
        typeof data.vehicleMake !== 'string' ||
        data.vehicleMake.trim().length < 3 ||
        data.vehicleMake.trim().length > 100
    ) {
        error.push({field: 'vehicleMake', message: 'Invalid vehicle make'})
    }

    if(
        !data.vehicleModel ||
        typeof data.vehicleModel !== 'string' ||
        data.vehicleModel.trim().length < 2 ||
        data.vehicleModel.trim().length > 100
    ) {
        error.push({field: 'vehicleModel', message: 'Invalid vehicleModel'})
    }

    if(!data.vehicleYear|| typeof data.vehicleYear !== 'number') {
        error.push({ field: 'vehicleYear', message: 'Invalid vehicle year'})
    }

    if(
        !data.vehicleLicensePlate ||
        typeof data.vehicleLicensePlate !== 'string' ||
        data.vehicleLicensePlate.trim().length < 6 ||
        data.vehicleLicensePlate.trim().length > 10
    ) {
        error.push({field: 'vehicleLicensePlate', message: 'Invalid vehicleLicensePlate'})
    }

    if(
        data.vehicleDescription !== null &&
        (typeof data.vehicleDescription !== 'string' ||
        data.vehicleDescription.trim().length < 10 ||
        data.vehicleDescription.trim().length > 200)
    ) {
        error.push({field: 'vehicleDescription', message: 'Invalid vehicle description'})
    }


    if (!Array.isArray(data.vehicleFeatures)) {
        error.push({
            field: 'vehicleFeatures',
            message: 'vehicleFeatures must be an array'
        });
    }


    if(Array.isArray(data.vehicleFeatures) && data.vehicleFeatures.length === 0) {
        error.push({field: 'vehicleFeatures', message: 'No vehicle features'})
    }

    if(Array.isArray(data.vehicleFeatures) && data.vehicleFeatures.length > 0) {
        const allowedFeatures = Object.values(VehicleFeature)
            for( const feature of data.vehicleFeatures) {
                if(!allowedFeatures.includes(feature)) {
                    error.push({
                        field: 'vehicleFeatures',
                        message:'Invalid vehicle feature'
                    })
                    break
                }
            }
    }









    return error;
}