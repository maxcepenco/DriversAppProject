import {DriverInputDto} from "../../../src/drivers/dto/driver.input-dto";
import {Express} from "express";
import {getDriverDto} from "./get-driver-dto";
import request from "supertest";
import {DRIVERS_PATHS} from "../../../src/core/paths/paths";
import {generateAdminAuthToken} from "../generate-admin-auth-token";
import {HttpStatuses} from "../../../src/core/utils/http-statuses";


export async function updateDriver (
    app: Express,
    driverId: number,
    driverDto: DriverInputDto
): Promise<void> {

    const defaultDriverData: DriverInputDto = getDriverDto()

    const testDriverData = { ...defaultDriverData, ...driverDto };

    const updateDriverResponse = await request(app)
        .put(`${DRIVERS_PATHS}/${driverId}`)
        .set('Authorization', generateAdminAuthToken())
        .send(testDriverData)
        .expect(HttpStatuses.NoContent_204)

    return updateDriverResponse.body;
}