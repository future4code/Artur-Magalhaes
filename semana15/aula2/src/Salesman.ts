import { User } from "./User";
import { Employee } from "./Employee";

export class Salesman extends Employee {
    constructor(
        id:string, 
        email: string, 
        name: string, 
        password: string,
        baseSalary: number){
            super(id, email, name, password, baseSalary)
            
        }
}