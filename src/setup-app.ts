import express, {Express} from 'express';
import {driversRouter} from "./drivers/routers/drivers.router";
import {getTestedRouter} from "./testing/router/testing.router";

//-------------------------------------Crud endpoint-------------------------------------------------------
export const setupApp = (app:Express) => {
    app.use(express.json());

    app.use('/drivers', driversRouter)
    app.use('/testing', getTestedRouter)

    return app


};