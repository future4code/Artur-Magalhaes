class Transactions {                      
    date: string
    value: number
    description: string
    
    constructor(_data:string, _value: number, _description:string){
        this.date = _data
        this.value = _value
        this.description = _description
    }
}