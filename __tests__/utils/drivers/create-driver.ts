import {DriverInputDto} from "../../../src/drivers/dto/driver.input-dto";
import {Driver} from "../../../src/drivers/types/driver";
import {Express} from "express";
import {getDriverDto} from "./get-driver-dto";
import {DRIVERS_PATHS} from "../../../src/core/paths/paths";
import {generateAdminAuthToken} from "../generate-admin-auth-token";
import {HttpStatuses} from "../../../src/core/utils/http-statuses";
import request from "supertest";


export async function createDriver(app:Express, driverDto?:DriverInputDto): Promise <Driver> {
    const defaultDriverData: DriverInputDto =  getDriverDto()

    const testDriverData = {...defaultDriverData, ...driverDto}

    const createdDriverResponse = await request(app)
        .post(DRIVERS_PATHS)
        .set('Authorization', generateAdminAuthToken())
        .send(testDriverData)
        .expect(HttpStatuses.Created_201)

    return createdDriverResponse.body;
}