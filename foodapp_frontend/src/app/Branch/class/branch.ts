import { Admin } from "src/app/Admin/class/admin";

export class Branch {
    id!:number;
    name!:string;
    address!:string;
    phone!:number;
    admin=new Admin();

    constructor(){}
}

