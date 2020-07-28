type person = {
  name: string,
  age: number,
}

function createPerson(name: string, age:number): person {
  return {
    name: name, 
    age:age 
  } 
} 

const myPerson2 = createPerson(process.argv[2], Number(process.argv[3]));
console.log("1\na. " + process.argv)
console.log(`b. Olá, ${myPerson2.name}! Você tem ${myPerson2.age} anos.`)
console.log(`c. Olá, ${myPerson2.name}! Você tem ${myPerson2.age} anos. Em sete anos você terá ${myPerson2.age + 7}`)


