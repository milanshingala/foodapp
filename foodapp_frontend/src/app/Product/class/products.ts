import { Manager } from "src/app/BranchManager/class/manager"
import { Menu } from "src/app/Menu/class/menu"

export class Products {
    id!:number
    name!:string
    type!:string
    availability!:string
    price!:number
    menu = new Menu()
    manager = new Manager()

    constructor(){}
}
