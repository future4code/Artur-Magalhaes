export default class UserAccount {                                                                                                                           
    private name: string
    private age: number
    private cpf: string
    private balance: number = 0
    private transactions: Transactions[]

    constructor(_name: string, _age: number, _cpf: string, _balance: number, _transactions:Transactions[]){
        this.name = _name
        this.age = _age
        this.cpf = _cpf
        this.balance = _balance
        this.transactions = _transactions
    }

    public getBalance = (_cpf: string, _name: string):number => {
        if (this.cpf === _cpf && this.name === _name){
            return this.balance
        }
        return 0
    }
    public getCPF = ():string => this.cpf
    public getAge = ():number => this.age
    public setBalance = (_cpf: string, _name: string, add:number):void => {
        if(this.cpf === _cpf && this.name === _name){
            this.balance += add
        }
    }
}