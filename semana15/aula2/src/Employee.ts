import { User } from "./User";

export class Employee extends User {
    constructor(
        id:string, 
        email: string, 
        name: string, 
        password: string,
        protected baseSalary: number){
            super(id, email, name, password)
            this.baseSalary = baseSalary
        }
}