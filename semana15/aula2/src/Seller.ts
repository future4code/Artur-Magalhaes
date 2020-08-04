import { User } from "./User";
import { Employee } from "./Employee";

export class Seller extends Employee {
    
    constructor(
        id:string, 
        email: string, 
        name: string, 
        password: string,
        baseSalary: number,
        admissionDate: Date){
            super(id, email, name, password, baseSalary, admissionDate)
        }

}