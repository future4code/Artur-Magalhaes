import { User } from './User'
import { Customer } from './Customer'
import { Employee } from './Employee'
import moment from 'moment'
import { Seller } from './Seller'

const user = new User("12345", "artur@gmail.com", "Artur", "123456")

console.log(user)
//1.a) Não seria possível imprimir password por que está com modificador private e não possui um get públco
//1.b) Imprime uma vez o console.log

const customer = new Customer("23456", "astrodev@gmail.com", "Astrodev", "234567", "123456789101")

console.log(customer)
//2.a) Imprime uma vez o console.log
//2.b) Foi impressa uma vez por que está presente no construtor da classe pai

console.log(
    customer.getCreditCard(),
    customer.getEmail(),
    customer.getId(),
    customer.getName(),
    customer.purchaseTotal)
//3.a) Não por que não tem nenhum método público para mostrar esse atributo

//4.
console.log(
    customer.introduceYourself()
)


const employee = new Employee("345678", "employee@gmail.com", "Employee", "3456789", 2000, new Date("02/02/2020"))
console.log(employee)

//6.a) A mensagem é impressa uma vez
//6.b) 
console.log(
    employee.getAdmissionDate(),
    employee.getBaseSalary(),
    employee.getEmail(),
    employee.getId(),
    employee.getName(),
    employee.introduceYourself()
)

//7.
console.log(employee.calculateTotalSalary())


const seller = new Seller("456789", "vendedor@gmail.com", "Venderdor", "456789", 5000, new Date("01/02/2020"))
//8.a) Os mesmos parâmetros de Employee
 
console.log(
    seller.calculateTotalSalary(),
    seller.getAdmissionDate(),
    seller.getBaseSalary(),
    seller.getEmail(),
    seller.getId(),
    seller.getName(),
    seller.introduceYourself()
)
//8.b) Os mesmos atributos e métodos da classe pai Employee, por que possuem métodos públicos


seller.setSalesQuantity()
//9.a) O valor salesQuantity so poderá ser acessado na própria classe Seller

console.log(seller.calculateTotalSalary())
//10.a) Imprime o total calculado pela classe Seller

