import { FoodOrder } from "src/app/FoodOrder/class/food-order"

export class Bill {
    orders = new FoodOrder()
    id!:number
    email!:string
    GST!:number
    Service_charge!:number
    Total_price!:number
}
