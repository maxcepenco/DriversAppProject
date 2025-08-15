import express, { Express, Request, Response } from 'express';
import {db} from "./db/db";
import {HttpStatuses} from "./core/http-statuses";
import {Driver} from "./drivers/types/driver";


export const setupApp = (app:Express) => {
    app.use(express.json());

    app.get('/drivers', (req: Request, res: Response) => {
        res.status(200).send(db.drivers)
    })
    app.get('/drivers/:id', (req: Request, res: Response) => {
       const foundDrivers = db.drivers.find(d => d.id === +req.params.id)
        if(!foundDrivers) {
            res.sendStatus(HttpStatuses.NotFound_404)
            return
        }
        res.status(HttpStatuses.Ok_200).send(foundDrivers)
    })

    app.post('/drivers', (req: Request, res: Response) => {
        const newDriver: Driver = {
            id: db.drivers.length ? db.drivers[db.drivers.length -1].id + 1 : 1,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            vehicleMake: req.body.vehicleMake,
            vehicleModel:req.body.vehicleModel,
            vehicleYear: req.body.vehicleYear,
            vehicleLicensePlate:req.body.vehicleLicensePlate,
            vehicleDescription: req.body.vehicleDescription,
            vehicleFeatures: req.body.vehicleFeatures,
            createdAt: new Date(),
        }
        db.drivers.push(newDriver)
        res.status(HttpStatuses.Created_201).send(newDriver)
    })

    app.get('/testing',(req: Request, res: Response) => {
        res.status(HttpStatuses.Ok_200).send('testing url')
    })

    app.delete('/testing/all-data', (req: Request, res: Response) => {
        db.drivers = []
        res.sendStatus(HttpStatuses.NoContent_204)
    })
    return app


};