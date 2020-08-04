import { User } from "./User";

export class Consumer extends User{
    constructor(
        id:string, 
        email: string, 
        name: string, 
        password: string,
        private creditCard: string,
        private total: number){
            super(id, email, name, password)
            this.creditCard = creditCard
            this.total = total
    }
}