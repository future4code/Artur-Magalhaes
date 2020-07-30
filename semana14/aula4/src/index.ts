import axios from 'axios';

const baseUrl = "ttps://us-central1-labenu-apis.cloudfunctions.net/labenews"

async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    console.log(users.data)
    return users.data
}

getSubscribers()