import { User } from "./User";
import { Employee } from "./Employee";

export class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMMISION: number = 5

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
        return this.baseSalary + Employee.BENEFITS_VALUE + (Seller.SELLING_COMMISION * this.salesQuantity)
    }
}