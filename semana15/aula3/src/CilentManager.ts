import { Client } from "./Client";

export class ClientManager {

    private clients: Client[] = []

    public addClient(data:Client): void {
        this.clients.push(data)
    }

    public getClientsQuantity = (): number => this.clients.length

    public calculateBillofClient(registrationNumber: number): number {
        const foundClient = this.clients.find( client => {
            return client.registrationNumber === registrationNumber;
        })
        if(foundClient){
            return foundClient.calculateBill();
        }

        return 0;
    }

    public calculateTotalIncome (): number {
        let total = 0
        this.clients.forEach(item => {
            total += item.calculateBill()
        })
        return total
    }

    public deleteUser (registrationNumber: number): void {
        let filterUser: Client[] = this.clients.filter(item => item.registrationNumber !== registrationNumber)
        this.clients = filterUser
    }

    public getClients () {
        return this.clients
    }
}