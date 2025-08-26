import {Currency} from "../types/Ride";


export type RiderInputDto = {
    clientName: string;
    price: number
    currency: Currency;
    driverId: number;
    fromAddress: string;
    toAddress: string;
}