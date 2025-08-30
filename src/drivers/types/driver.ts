
export enum VehicleFeature {
    WiFi = 'Wi-fi',
    ChildSeat = 'child-seat',
    PetFriendly = 'pet-friendly'
}

export type Driver = {
    name:string
    phoneNumber:string
    email:string
    vehicle: {
        make: string
        model: string
        year:number
        licensePlate:string
        description:string | null
        features: VehicleFeature[]
    }
    createdAt:Date
}
