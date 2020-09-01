export interface User {
    nome: string,
    vida: number | undefined,
    defesa: number | undefined,
    forca: number | undefined
}

export function validateCharacter (user: User) {
    if(!user.nome ||
        user.vida === undefined ||
        user.defesa === undefined ||
        user.forca === undefined){
        return false;
    }

    if(user.vida < 0 || user.forca < 0 || user.defesa < 0){
        return false;
    }

    return true;
}

export async function performAttack(attacker: User, defender: User, valida = (input: User) => validateCharacter){
    const validate1 = valida(attacker);

    const validate2 = valida(defender);

    if(!validate1 || !validate2){
        return "Invalid Character"
    }
    const forceAttack = Number(attacker.forca) - Number(defender.defesa)
      
    if(forceAttack > 0) {
        defender = {
            ...defender,
            vida: Number(defender.vida) -forceAttack
        }
        
    }

    return {
        attack: attacker, 
        defende: defender
    }
}