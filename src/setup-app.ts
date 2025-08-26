import express, {Express} from 'express';
import {driversRouter} from "./drivers/routers/drivers.router";
import {getTestedRouter} from "./testing/router/testing.router";
import {DRIVERS_PATHS, RIDES_PATHS, TESTING_PATHS} from "./core/paths/paths";
import {riderRouter} from "./rides/routes/riderRouter";

//-------------------------------------Crud endpoint-------------------------------------------------------
export const setupApp = (app:Express) => {
    app.use(express.json());

    app.use( DRIVERS_PATHS, driversRouter)
    app.use( TESTING_PATHS, getTestedRouter)
    app.use( RIDES_PATHS, riderRouter)

    return app
};