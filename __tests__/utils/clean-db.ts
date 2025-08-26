import request from 'supertest'
import {Express} from "express";
import {TESTING_PATHS} from "../../src/core/paths/paths";
import {HttpStatuses} from "../../src/core/utils/http-statuses";


export async function cleanDb(app:Express) {
    await request(app)
        .delete(`${TESTING_PATHS}/all-data`)
        .expect(HttpStatuses.NoContent_204)
}