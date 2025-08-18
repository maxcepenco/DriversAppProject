import {HttpStatuses} from "../../core/utils/http-statuses";
import {Router,Request,Response} from "express";
import {db} from "../../db/db";


export const testingRouter = Router({});

export const getTestedRouter = () => {
    testingRouter.delete('/all-data', (req: Request, res: Response) => {
        db.drivers = []
        res.sendStatus(HttpStatuses.NoContent_204)
    })
}

