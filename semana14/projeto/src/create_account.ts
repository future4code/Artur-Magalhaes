import moment from 'moment';
import * as fs from 'fs';
import {writeDataBase, subscribeDataBase} from './write_database';
import readDB from './read_database';

export type Buy = {
    value: number,
    dateBuy: moment.Moment,
    description: string,
}

type User = {
    name: string,
    cpf: string,
    dateOfBirth: moment.Moment
    balance: number,
    history: Buy[],
}

export function createAccount (
    name: string,
    cpf: string,
    dateOfBirth: moment.Moment,
    balance: number,
    history: Buy[]) 
    {
      const years:number = moment().diff(dateOfBirth, "years")
      
      if(years >= 18){
      const data:any[] = JSON.parse(fs.readFileSync("./data.json").toString());
    
      const dataUser: User = {
        name,
        cpf,
        dateOfBirth,
        balance,
        history,
      }
      const aux = data.filter(item => item.cpf === cpf)
      if(aux.length === 0){
        data.push(dataUser)
        console.log(data)
        subscribeDataBase(JSON.stringify(data))
        readDB()
      }
    } else{
      console.error("Usuário precisa ter 18 anos ou mais");
    }
}
