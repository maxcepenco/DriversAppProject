"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const drivers_router_1 = require("./routers/drivers.router");
const testing_router_1 = require("./testing/router/testing.router");
//-------------------------------------Crud endpoint-------------------------------------------------------
const setupApp = (app) => {
    app.use(express_1.default.json());
    app.use('/drivers', drivers_router_1.driversRouter);
    app.use('/testing', testing_router_1.testingRouter);
    return app;
};
exports.setupApp = setupApp;
