import {HttpStatuses} from "../../../core/utils/http-statuses";
import {db} from "../../../db/db";
import {Request, Response} from "express";


export const GetDriverListHandler =(req:Request, res:Response)=> {
    res.status(HttpStatuses.Ok_200).send(db.drivers)

}