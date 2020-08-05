import UserAccount from './UserAccount'
import Bank from './Bank'
import {readFile, writeFile} from './File'

let transactions: Transactions[] = []
let arrayUsers: any[] = []


const arquivo = JSON.parse(readFile())
arrayUsers = arquivo
if(Number(process.argv[3]) > 18){
    const newAccount:UserAccount = new UserAccount(process.argv[2], Number(process.argv[3]), process.argv [4], 10, transactions);
    arrayUsers.push(newAccount)

    //console.log(typeof(arquivo))

    writeFile(JSON.stringify(arrayUsers)) 

    //const arquivo = JSON.parse(readFile())
    //arrayUsers = arquivo 
    console.log(`Saldo é: ${newAccount.getBalance(process.argv[4], process.argv[2])}`)
    newAccount.setBalance(process.argv[4], process.argv[2], 25)
    console.log(`Saldo é: ${newAccount.getBalance(process.argv[4], process.argv[2])}`)

    arrayUsers.forEach((item,index) => {
        if (item.cpf === newAccount.getCPF()){
            arrayUsers.splice(index,1)
        }
    })

    arrayUsers.push(newAccount)
    writeFile(JSON.stringify(arrayUsers))
    console.log(arrayUsers)

    const bank = new Bank()
    bank.getAccounts()
} else{
    console.log("Usuário precisa ser maior de 18 anos")
}