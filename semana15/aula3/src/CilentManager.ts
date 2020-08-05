import { Client } from "./Client";

export class ClientManager {

    private clients: Client[] = []

    public addClient(data:Client): void {
        this.clients.push(data)
    }

    public getClientsQuantity = (): number => this.clients.length
}