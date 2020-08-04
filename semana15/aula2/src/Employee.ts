import { User } from "./User";
import moment from 'moment';

export class Employee extends User {
    protected baseSalary: number
    protected admissionDate: Date

    constructor(
        id:string, 
        email: string, 
        name: string, 
        password: string,
        baseSalary: number,
        admissionDate: Date){
            super(id, email, name, password)
            this.baseSalary = baseSalary
            this.admissionDate = admissionDate
        }

    public getBaseSalary = (): number => this.baseSalary

    public getAdmissionDate = (): Date => this.admissionDate

    public calculateTotalSalary = (): number => {
        return this.baseSalary += 400
    }
}