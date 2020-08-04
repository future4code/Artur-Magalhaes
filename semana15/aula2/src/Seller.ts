import { User } from "./User";
import { Employee } from "./Employee";

export class Seller extends Employee {
    private salesQuantity: number = 0

    constructor(
        id:string, 
        email: string, 
        name: string, 
        password: string,
        baseSalary: number,
        admissionDate: Date){
            super(id, email, name, password, baseSalary, admissionDate)
        }

    public setSalesQuantity = () => this.salesQuantity++
    
    public calculateTotalSalary = () => {
        return this.baseSalary + 400 + (5 * this.salesQuantity)
    }
}