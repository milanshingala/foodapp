import { Staff } from "src/app/Staff/class/staff"

export class FoodOrder {
    id!:number
    status!:string
    totalPrice!:number
    orderCreatedTime!:string
    orderDeliveryTime!:string
    customerName!:string
    contactNumber!:string

    staff=new Staff()

    constructor(){}
}
