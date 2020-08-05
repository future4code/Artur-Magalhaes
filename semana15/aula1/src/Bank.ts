import UserAccount from "./UserAccount";
import { readFile } from './File'

export default class Bank {
    private accounts: UserAccount[] = []

    public getAccounts = () => {
        console.log(readFile())
    }
}