import {Driver} from "../../../src/drivers/types/driver";
import {Express} from "express";
import {DRIVERS_PATHS} from "../../../src/core/paths/paths";
import request from "supertest";
import {generateAdminAuthToken} from "../generate-admin-auth-token";
import {HttpStatuses} from "../../../src/core/utils/http-statuses";


export async function getDriverById(
    app: Express,
    driverId: number,
): Promise <Driver> {
    const driverResponse = await request(app)
        .get(`${DRIVERS_PATHS}/${driverId}`)
        .set('Authorization', generateAdminAuthToken())
        .expect(HttpStatuses.Ok_200)

    return driverResponse.body;
}