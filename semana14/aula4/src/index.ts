import axios from 'axios';
import moment from 'moment'

const baseUrl = "ttps://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
    id: string,
    name: string,
    email: string,
}

type News = {
	title: string,
	content: string,
	date: moment.Moment
}

type Notifications = {
	subscriberId: string,
	message: string,
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

//4.
/*a) 
{
	title: string,
	content: string,
	date: moment.Moment
}
*/

function createNews(title: string, content:string):void {
    const body = {
        title,
        content,
        date: moment.now()
    }
    axios.put(`${baseUrl}/news`,body)
        .then(() => console.log(body.title))
        .catch(error => console.error(error))
}

createNews("Mello no backend", "Bem vindo");

/*
function sendNews(subscriberId:string, message:string) {

    const body = {
        subscriberId,
        message,
    }

    axios.post(`${baseUrl}/notifications/send`, body)
        .then(() => console.log(body.message))
        .catch(error => console.error(error));
}
sendNews("km12cB7GANWHLYh5KzEC", "Mello no backend")
*/