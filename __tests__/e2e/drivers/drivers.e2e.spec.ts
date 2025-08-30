import {setupApp} from "../../../src/setup-app";
import express from "express";
import {generateAdminAuthToken} from "../../utils/generate-admin-auth-token";
import {cleanDb} from "../../utils/clean-db";
import {DriverInputDto} from "../../../src/drivers/dto/driver.input-dto";
import {createDriver} from "../../utils/drivers/create-driver";
import {getDriverDto} from "../../utils/drivers/get-driver-dto";
import request from "supertest";
import {DRIVERS_PATHS} from "../../../src/core/paths/paths";
import {HttpStatuses} from "../../../src/core/utils/http-statuses";

describe ('Driver API', () => {
    const app = express()
    setupApp(app)

    const adminToken = generateAdminAuthToken()

    beforeAll(async () => {
        await cleanDb(app)
    })

    it('should create driver;POST / api/ drivers', async () => {
        const newDriver: DriverInputDto = {
            ...getDriverDto(),
            name: 'Feodor,',
            email: 'fedor@expample.com'
        }
        const createdDriver = await createDriver(app, newDriver)
        expect(createdDriver.name).toEqual('Fedor')
        expect(createdDriver.email).toBe('feodor@expample.com')
        expect(createdDriver.id).toBeDefined()
    })
    it('should return driver by id; GET /api/ drivers', async () => {
        await createDriver(app)
        await createDriver(app)

        const response = await request(app)
            .get(DRIVERS_PATHS)
            .set('Authorization', adminToken)
            .expect(HttpStatuses.Ok_200)

        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length).toBeGreaterThanOrEqual(2)
    })



})
