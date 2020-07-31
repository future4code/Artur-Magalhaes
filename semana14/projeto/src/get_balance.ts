import * as fs from 'fs'

function getBalance(name:string, cpf:string) {
    let balance: number = 0
    const data: any[] = JSON.parse(fs.readFileSync("./data.json").toString());
    data.filter(item=>{ 
        if (item.cpf === cpf && item.name == name){
            balance = item.balance
    }})

    console.log(balance)
}

getBalance("Artur","11111111111")