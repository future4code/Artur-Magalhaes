import * as fs from "fs";

export function writeDataBase (data: any): void {
    try{
        fs.appendFileSync('./data.json', data + '\n')
    } catch (error) {
        console.error("Error ao salvar no banco de dados: " + error.message)
    }
}

export function subscribeDataBase (data: any): void {
    try{
        fs.writeFileSync('./data.json', data + '\n')
    } catch (error) {
        console.error("Error ao salvar no banco de dados: " + error.message)
    }
}