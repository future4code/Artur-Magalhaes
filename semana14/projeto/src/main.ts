import {createAccount, Buy} from './create_account';
import {add_balance} from './add_balance';
import moment from 'moment';

let initialBuys: Buy[] = []

createAccount("Artur", "11111111111", moment("22/10/1995","DD/MM/YYYY"), 0, initialBuys)

add_balance("Artur", "11111111111", 25)