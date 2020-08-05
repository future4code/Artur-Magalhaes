import { Client } from './Client';

const client: Client = {
    name: "Artur",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
}

console.log(
    client, 
    client.name,
    client.registrationNumber,
    client.consumedEnergy,
    client.calculateBill()
    )

//1.a) Todas as informações foram impressas

