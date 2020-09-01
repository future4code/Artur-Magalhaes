import { User, validateCharacter, performAttack } from "../data/User";
import { exec } from "child_process";

describe("Exercicio 2", () => {

  test("a) ", async () => {
    const user: User = {
        nome: "", 
        vida: 1500, 
        defesa: 300, 
        forca: 500
    };
    expect(validateCharacter(user)).toBe(false);

  });

  test("b) ", async () => {
    const user: User = {
        nome: "Pikachu", 
        vida: undefined, 
        defesa: 300, 
        forca: 500
    };
    expect(validateCharacter(user)).toBe(false);
  });

  test("c) ", async () => {
    const user: User = {
        nome: "Pikachu", 
        vida: 1500, 
        defesa: undefined, 
        forca: 500
    };
    expect(validateCharacter(user)).toBe(false)
  });

  test("d) ", async () => {
    const user: User = {
        nome: "Pikachu", 
        vida: 1500, 
        defesa: 300, 
        forca: undefined
    };
    expect(validateCharacter(user)).toBe(false);
  });

  test("e) ", async() => {
    const user: User = {
        nome: "", 
        vida: -18, 
        defesa: 300, 
        forca: 500
    };
    expect(validateCharacter(user)).toBe(false);
  });

  test("f) ", async() => {
    const user: User = {
        nome: "Pikachu", 
        vida: 0, 
        defesa: 300, 
        forca: 500
    };
    expect(validateCharacter(user)).toBe(true);
  });

  test("g) ", async() => {
    const user: User = {
        nome: "Pikachu", 
        vida: 1500, 
        defesa: 300, 
        forca: 500
    };

    expect(validateCharacter(user)).toBe(true);
  });
});

describe("Exercicio 4", () => {
  //Devemos criar um mock de validateCaracther pq ela é implementada fora da função e já tem um teste unitario para ela

  test("b)", async() => {
    const valida = jest.fn(() => {
        return true
    });
  });

  test("c) ", async() => {
    const valida = jest.fn(() => {
        return false
    });
  });
});

describe("Exercicio 5", () => {
    test("a) ", async() => {
        const attacker: User = {
            nome: "Pikachu", 
            vida: 1500, 
            defesa: 300, 
            forca: 550
        };
        const defender: User = {
            nome: "Raichu", 
            vida: 1500, 
            defesa: 350, 
            forca: 600
        };
        const valida = jest.fn(() => {
            return true;
        });
    
        const result:any = await performAttack(attacker, defender, valida as any);
        
        expect(result.defende.vida).toEqual(1300);
        expect(valida).toBeCalled();
        expect(valida).toBeCalledTimes(2);
        expect(valida).toHaveReturnedTimes(2);
    });

    test("b)", async() => {
        const attacker: User = {
            nome: "Pikachu", 
            vida: 1500, 
            defesa: 300, 
            forca: 550
        };
        const defender: User = {
            nome: "Raichu", 
            vida: 1500, 
            defesa: 350, 
            forca: 600
        };
        const valida = jest.fn(() => {
            return false
        });
    
        const result = await performAttack(attacker, defender, valida as any);
        
        expect(result).toEqual("Invalid Character");
        expect(valida).toBeCalled();
        expect(valida).toBeCalledTimes(2);
        expect(valida).toHaveReturnedTimes(2);
    });
});

describe("Exercicio 6", () => {
    test("I)", async() => {
        const attacker: User = {
            nome: "Pikachu", 
            vida: 1500, 
            defesa: 300, 
            forca: 850
        };
        const defender: User = {
            nome: "Raichu", 
            vida: 1500, 
            defesa: 350, 
            forca: 1000
        };

        const valida = jest.fn(() => {
            return true
        });

        const result: any = await performAttack(attacker, defender, valida as any);
        expect(result.defende.vida).toEqual(1000);
        expect(result).toEqual({
            attack: { nome: 'Pikachu', vida: 1500, defesa: 300, forca: 850 },
            defende: { nome: 'Raichu', vida: 1000, defesa: 350, forca: 1000 }
        })
    });
    
    test("II)", async() => {
        const attacker: User = {
            nome: "Pikachu", 
            vida: 1500, 
            defesa: undefined, 
            forca: 850
        };
        const defender: User = {
            nome: "Raichu", 
            vida: 1500, 
            defesa: 350, 
            forca: 1000
        };

        const valida = jest.fn(() => {
            return false
        });

        const result: any = await performAttack(attacker, defender, valida as any);
        expect(result).toEqual("Invalid Character");
        expect(valida).toHaveBeenCalled()
    });

    test("III)", async() => {

        expect.assertions(3);

        const attacker: User = {
            nome: "Pikachu", 
            vida: 1500, 
            defesa: undefined, 
            forca: 850
        };
        const defender: User = {
            nome: "Raichu", 
            vida: 1500, 
            defesa: 350, 
            forca: 1000
        };

        const valida = jest.fn(() => {
            return false
        });

        const result: any = await performAttack(attacker, defender, valida as any);
        expect(result).toEqual("Invalid Character");
        expect(valida).toHaveBeenCalled()
        expect(valida).toHaveBeenCalledTimes(2);
    });

    test("IV)", async() => {
        const attacker: User = {
            nome: "Pikachu", 
            vida: 1500, 
            defesa: 10, 
            forca: 1510
        };
        const defender: User = {
            nome: "Raichu", 
            vida: 1500, 
            defesa: 10, 
            forca: 1550
        };

        const valida = jest.fn(() => {
            return true
        });

        const result: any = await performAttack(attacker, defender, valida as any);
        expect(result).toEqual({
            attack: { nome: 'Pikachu', vida: 1500, defesa: 10, forca: 1510 },
            defende: { nome: 'Raichu', vida: 0, defesa: 10, forca: 1550 }
        });
        expect(valida).toHaveBeenCalled();
        expect(valida).toHaveBeenCalledTimes(2);
    });
});