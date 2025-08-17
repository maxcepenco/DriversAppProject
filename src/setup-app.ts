import express, {Express} from 'express';
import {driversRouter} from "./routers/drivers.router";
import {testingRouter} from "./testing/router/testing.router";

//-------------------------------------Crud endpoint-------------------------------------------------------
export const setupApp = (app:Express) => {
    app.use(express.json());

    app.use('/drivers', driversRouter)
    app.use('/testing', testingRouter)

    return app


};