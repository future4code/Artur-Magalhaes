import * as fs from 'fs';

//GetAllAccounts
export default function readDataBase() {
    const array = fs.readFileSync("./data.json")
    console.log(array.toString())
}