import axios from 'axios';

const baseUrl = "ttps://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
    id: string,
    name: string,
    email: string,
}

//1.
async function getSubscribers(): Promise<User[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    console.log(users.data)
    return users.data
}

getSubscribers()
//2.a)Arrow function o valor é armazenado numa variável.
const getSubscribers2 = async ():Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    console.log(users.data)
    return users.data
}
getSubscribers2()

//3a)Não há erro de tipagem.
const getSubscribers3 = async ():Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((user:User) => {//***Pq não ser assim 3.b
        console.log(user)
        return{
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
}