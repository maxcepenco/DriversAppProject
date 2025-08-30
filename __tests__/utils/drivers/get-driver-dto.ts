import {DriverInputDto} from "../../../src/drivers/dto/driver.input-dto";

export function getDriverDto():DriverInputDto {
    return {
        name: 'Feodor',
        phoneNumber: '123456789',
        email: 'feodor@example.com',
        vehicleMake: 'Audi',
        vehicleModel: 'A6',
        vehicleYear: 2020,
        vehicleLicensePlate: 'XYZ-FDS',
        vehicleDescription: null,
        vehicleFeatures:[]

    }
}