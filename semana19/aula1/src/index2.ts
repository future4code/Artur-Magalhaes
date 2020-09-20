export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

export interface User {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

export interface Casino {
    name: string,
    location: LOCATION
}

export interface Result {
    brazilian: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: User[],
    unallowed: User[]
}

let resultItemEUA: ResultItem = 
    {allowed: [],
    unallowed: []}
let resultItemBR: ResultItem = 
    {allowed: [],
    unallowed: []}

export function verifyAge(casino: Casino, users: User[]) {

    if(casino.location === "EUA"){
        for (let user of users){
            if(user.age >= 21) {
                if(user.nacionality === NACIONALITY.AMERICAN){
                    resultItemEUA.allowed.push(user);
                } else {
                    resultItemBR.allowed.push(user);
                }
            } else {
                if(user.nacionality === NACIONALITY.AMERICAN){
                    resultItemEUA.unallowed.push(user);
                } else {
                    resultItemBR.unallowed.push(user);
                }
            }
        }
    } else {
        for (let user of users){
            if(user.age >= 18) {
              if(user.nacionality === NACIONALITY.BRAZILIAN){
                resultItemBR.allowed.push(user);
              } else {
                resultItemEUA.allowed.push(user);
              }
            } else {
              if(user.nacionality === NACIONALITY.BRAZILIAN){
                resultItemBR.unallowed.push(user);
              } else {
                resultItemEUA.unallowed.push(user);
              }
            }
        }
    }

    return {
        brazilian: {
            allowed: resultItemBR.allowed.map((item: User) => {
                return item.name
            }),
            unallowed: resultItemBR.unallowed.map((item: User) => {
                return item.name
            })
        },
        americans: {
            allowed: resultItemEUA.allowed.map((item: User) => {
                return item.name
            }),
            unallowed: resultItemEUA.unallowed.map((item: User) => {
                return item.name
            })
        }
    }
}
/*
const cassino: Casino = {
    name: "Hell Bar",
    location: LOCATION.EUA
}

const arrayUsers: User[] = [
    {    
        name: "Artur",
        age: 25,
        nacionality: NACIONALITY.BRAZILIAN
    },{    
        name: "Maria",
        age: 18,
        nacionality: NACIONALITY.BRAZILIAN
    },{    
        name: "Bernardo",
        age: 2,
        nacionality: NACIONALITY.BRAZILIAN
    },{    
        name: "Lucas",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    },
]

console.log(verifyAge(cassino, arrayUsers));*/