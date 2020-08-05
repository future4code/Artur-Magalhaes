import { Client } from './Client';
import { Place } from './Place';

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

const place = new Place("60000000")
console.log(place)

//2.a) Não é possível criar instancia de uma classe abstrata
//2.b) Deve criar outra classe que estenda a classe abstrata.
