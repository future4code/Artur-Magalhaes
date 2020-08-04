import * as fs from 'fs';
import moment from 'moment'
import { subscribeDataBase } from './write_database';

type Payment = {
    value: number,
    description: string,
    date: moment.Moment,
}

function payment(cpf:string, value: number, description: string, date: moment.Moment) {
    const dataPayment:Payment = {value,description,date}
    //getbalance
    let balance: number = 0
    const data: any[] = JSON.parse(fs.readFileSync("./data.json").toString());
    data.forEach(item=>{ 
        if (item.cpf === cpf){
            balance = item.balance
          if(balance >= value){
            item.balance -= value
            item.history.push(JSON.stringify(dataPayment))
        } else {
            console.error("Não foi possível pagar a conta")
        }
    }})
    subscribeDataBase(JSON.stringify(data))
    console.log(data)
}

payment("11111111111", 20, "Pagando a conta", moment())
