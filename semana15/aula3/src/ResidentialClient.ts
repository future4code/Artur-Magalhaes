import { Residence } from "./Residence";
import { Client } from "./Client";


export class ResidentialClient extends Residence implements Client{
    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string
    ){
        super(residentsQuantity, cep)
    }

    public calculateBill = ():number => {
        return this.consumedEnergy * 0.75
    }

    public getCpf = () => this.cpf

}