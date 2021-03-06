import { Client } from './Client';
import { Place } from './Place';
import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';
import { ResidentialClient } from './ResidentialClient';
import { CommercialClient } from './CommercialCIient';
import { ClientManager } from './CilentManager';
import { IndustrialClient } from './IndustrialClient';

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

//const place = new Place("60000000")
//console.log(place)

//2.a) Não é possível criar instancia de uma classe abstrata
//2.b) Deve criar outra classe que estenda a classe abstrata.

const residence = new Residence(3,"60000000")
const commerce = new Commerce(2, "60000100")
const industry = new Industry(1, "60000200")

console.log(
    residence,
    commerce, 
    industry,
    residence.getResidentsQuantity(),
    commerce.getFloorsQuantity(),
    industry.getMachinesQuantity()
    )

//4.a) Deve-se implementar os atributos e métodos da interface Client (name, registrationNumber, consumedEnergy) e da superclasse Residence (cep e residentsQuantity)
//     Tem que implementar também o método para pegar o item privado (cpf)

const residentialClient = new ResidentialClient("11111111111", "Astrodev", 1, 100, 2, "60000003")
const commercialClient = new CommercialClient("111111111000192", "CearaSC", 2, 1000, 3, "60100200")
console.log(
    residentialClient,
    residentialClient.calculateBill(),
    commercialClient,
    commercialClient.calculateBill()
    )
//5.a) Implementa a interface Client com seus atributos e métodos e estende a classe abstrata Place que possui o atributo cep.
//5.b) Atributo cpf em ResidentialClient e cnpj em CommercialClient, e a implementação do método da interface

const industrialClient = new IndustrialClient(30, "Industrias Ceara", 5, 5000, 4, "123456789")
//6.a) Deve ser filha de Industry para pegar o atributo machinesQuantity.
//6.b) Implementa a interface Client, por que ela representa um cliente do tipo industria.
//6.c) Por que não será necessário alterar os valores iniciais.

const clientManager = new ClientManager()

clientManager.addClient(residentialClient)
clientManager.addClient(commercialClient)
clientManager.addClient(industrialClient)

console.log(clientManager.getClientsQuantity())
console.log(clientManager.calculateBillofClient(2))
console.log(clientManager.calculateTotalIncome())


clientManager.deleteUser(2)

console.log(clientManager.getClients())