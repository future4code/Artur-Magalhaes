import axios from 'axios';

const baseUrl = "ttps://us-central1-labenu-apis.cloudfunctions.net/labenews"
//1.
async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    console.log(users.data)
    return users.data
}

getSubscribers()
//2.a)Arrow function o valor é armazenado numa variável.
const getSubscribers2 = async ():Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    console.log(users.data)
    return users.data
}
getSubscribers2()