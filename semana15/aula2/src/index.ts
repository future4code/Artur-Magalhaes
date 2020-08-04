import { User } from './User'

const user = new User("12345", "artur@gmail.com", "Artur", "123456")

console.log(user)
//1.a) Não seria possível imprimir password por que está com modificador private e não possui um get públco
//1.b) Imprime uma vez o console.log

