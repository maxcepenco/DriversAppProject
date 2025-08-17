import {Router,Request,Response} from "express";
import {HttpStatuses} from "../core/http-statuses";
import {db} from "../db/db";
import {UriParamsInputDto} from "../drivers/dto/driver.uri-params-dto";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from "../core/reuqestParams";
import {createErrorMessage} from "../core/utils/error.utils";
import {vehicleInputDtoValidation} from "../validation/vehicleInputDtoValidation";
import {DriverInputDto} from "../drivers/dto/driver.input-dto";
import {Driver} from "../drivers/types/driver";


export const driversRouter = Router({})

driversRouter
  .get('',(req:Request, res:Response) => {
      res.status(HttpStatuses.Ok_200).send(db.drivers)
  })
    .get('/:id', (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
        const id = parseInt(req.params.id)
        const driver = db.drivers.find(d => d.id ===id)

        if(!driver) {
            res
                .status(HttpStatuses.NotFound_404)
                .send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
            return
        }
        res.status(HttpStatuses.Ok_200).send(driver)
    })
    .post('', (req:RequestWithBody<DriverInputDto>, res:Response) => {
        const errors = vehicleInputDtoValidation(req.body)

        if(errors.length > 0) {
            res.status(HttpStatuses.BadRequest_400).send(createErrorMessage(errors))
            return
        }

        const newDriver: Driver = {
            id:db.drivers.length ? db.drivers[db.drivers.length - 1].id + 1 : 1,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email:  req.body.email,
            vehicleMake: req.body.vehicleMake,
            vehicleModel: req.body.vehicleModel,
            vehicleYear: req.body.vehicleYear,
            vehicleLicensePlate: req.body.vehicleLicensePlate,
            vehicleDescription: req.body.vehicleDescription,
            vehicleFeatures: req.body.vehicleFeatures,
            createdAt: new Date(),
        }
        db.drivers.push(newDriver)
        res.status(HttpStatuses.Created_201).send(newDriver)
    })

    .put('/:id', (req:RequestWithParamsAndBody<UriParamsInputDto,DriverInputDto>, res:Response) => {
        const id = parseInt(req.params.id)
        const index = db.drivers.findIndex((d) => d.id === id)

        if(index === -1) {
            res
                .status(HttpStatuses.NotFound_404)
                .send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
            return
        }

        const errors = vehicleInputDtoValidation(req.body)

        if(errors.length > 0) {
            res.status(HttpStatuses.BadRequest_400).send(createErrorMessage(errors))
            return
        }

        const driver = db.drivers[index]

        driver.name = req.body.name
        driver.phoneNumber = req.body.phoneNumber
        driver.email = req.body.email
        driver.vehicleMake = req.body.vehicleMake
        driver.vehicleModel = req.body.vehicleModel
        driver.vehicleYear = req.body.vehicleYear
        driver.vehicleLicensePlate = req.body.vehicleLicensePlate
        driver.vehicleDescription = req.body.vehicleDescription
        driver.vehicleFeatures = req.body.vehicleFeatures

        res.sendStatus(HttpStatuses.NoContent_204)
    })
    .delete('/:id', (req:RequestWithParams<UriParamsInputDto>, res:Response) => {
        const id = parseInt(req.params.id)
        const driverExist = db.drivers.some(d => d.id === id)

        if(!driverExist) {
            res.status(HttpStatuses.NotFound_404)
            res.send(createErrorMessage([{field: 'id', message: 'Driver not found'}]))
        }

        db.drivers.filter(d => d.id !== id)

        res.sendStatus(HttpStatuses.NoContent_204)


    })
