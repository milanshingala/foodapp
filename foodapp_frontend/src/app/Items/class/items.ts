import { FoodOrder } from "src/app/FoodOrder/class/food-order"

export class Items {
    id!:number
    name!:string
    type!:string
    quantity!:string
    price!:string
    foodorder = new FoodOrder()
}
