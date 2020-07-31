import * as fs from 'fs'
import { subscribeDataBase} from './write_database'

export const add_balance = (name:string, cpf:string, value:number) => {
    const data: any[] = JSON.parse(fs.readFileSync('./data.json').toString())
    data.forEach(element => {
        if(element.cpf === cpf && element.name === name){
            element.balance += value
        }
    });
    
    subscribeDataBase(JSON.stringify(data))
    console.log(data)
}