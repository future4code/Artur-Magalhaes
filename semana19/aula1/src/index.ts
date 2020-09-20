export interface User {
    name: string,
    saldo: number
}

export function performPurchase(user: User, value: number) {
    if(user.saldo >= value){
        return {
            ...user,
            saldo: user.saldo -= value
        };
    } else {
        return "Saldo indisponivel";
    }
}