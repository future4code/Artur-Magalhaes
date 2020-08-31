import { User, performPurchase } from "..";
import { User as User2, NACIONALITY, verifyAge, Casino, LOCATION } from "../index2";
import { verify } from "crypto";

describe.skip ("Exercicio 2", ()=> {
  
  test("a)Usuário com saldo maior que valor de compra", () => {
    const user: User = {
        name: "Alice",
        saldo: 5000
    }

    const result = performPurchase(user, 500);

    expect(result).toEqual({
        ...user,
        saldo: 4500
    });
  });

  test("b) Usuário com saldo igual ao valor de compra", () => {
      
    const user = {
        name: "Artur",
        saldo: 300
    }

    const result = performPurchase(user, 300);

    expect(result).toEqual({
        ...user,
        saldo: 0
    });
  });

  test("c) Usuário com saldo menor que valor de compra", () => {
      
    const user = {
        name: "Artur",
        saldo: 200
    }

    const result = performPurchase(user, 300);

    expect(result).toEqual("Saldo indisponivel");
  });
});

describe.skip ("Exercicio 4", ()=> {
    test("a) Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const user: User2 = {
            name: "Artur",
            age: 25,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const cassino: Casino = {
            name: "Hell's Bar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(cassino, [user]);

        expect(result).toEqual({
            brazilian: { allowed: [ 'Artur' ], unallowed: [] },
            americans: { allowed: [], unallowed: [] }
          });
    });

    test("b) Escreva um teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil", () => {
        const user: User2 = {
            name: "Joe",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
        }

        const cassino: Casino = {
            name: "Hell's Bar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(cassino, [user]);

        expect(result).toEqual({
            brazilian: { allowed: ['Artur'], unallowed: [] },
            americans: { allowed: ['Joe'], unallowed: [] }
        });
    });

    test("c) Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.", () => {
        
        const arrayUsers: User2[] = [
            {    
                name: "Artur",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Bernardo",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },{    
                name: "Lucas",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
        ]

        const cassino: Casino = {
            name: "Hell's Bar",
            location: LOCATION.EUA
        }

        const result = verifyAge(cassino, arrayUsers);

        expect(result).toEqual({
            brazilian: { allowed: ['Artur'], unallowed: ['Artur', 'Maria'] },
            americans: { allowed: ['Joe'], unallowed: ['Bernardo', 'Lucas'] }
        });
    });

    test("d) Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.", () => {
        
        const arrayUsers: User2[] = [
            {    
                name: "Artur",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Bernardo",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },{    
                name: "Lucas",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
        ]

        const cassino: Casino = {
            name: "Hell's Bar",
            location: LOCATION.EUA
        }

        const result = verifyAge(cassino, arrayUsers);

        expect(result).toEqual({
            brazilian: { allowed: ['Artur'], unallowed: ['Artur','Maria','Artur', 'Maria'] },
            americans: { allowed: ['Joe','Bernardo','Lucas'], unallowed: ['Bernardo', 'Lucas'] }
        });
    });
});

describe ("Exercicio 5", ()=> {
    test.skip("a) Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o tamanho do array allowed da propriedade brasilians tenha tamanho menor do que 2 e maior do que 0.", () => {
        
        const user: User2 = {
            name: "João",
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casyno",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user]);
        
        expect(result.brazilian.allowed.length).toBeLessThan(2)
    });

    test.skip("b) Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0.", () => {
        const user: User2 = {
            name: "Joe",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casyno",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user]);
        
        expect(result.brazilian.unallowed.length).toBe(0);
    });

    test.skip("Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou", () => {
        const arrayUsers: User2[] = [
            {    
                name: "Artur",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Bernardo",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },{    
                name: "Lucas",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
        ]

        const casino: Casino = {
            name: "Cassino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, arrayUsers);

        expect(result.brazilian.unallowed).toContain('Artur');
    });

    test("Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que 1. Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 2. ", () => {
        
        const arrayUsers: User2[] = [
            {    
                name: "Artur",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },{    
                name: "Bernardo",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },{    
                name: "Lucas",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
        ]

        const casino: Casino = {
            name: "Bar",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, arrayUsers);
        
        expect(result.brazilian.unallowed.length).toBe(2);
        expect(result.americans.allowed.length).toBe(2);
    });
});