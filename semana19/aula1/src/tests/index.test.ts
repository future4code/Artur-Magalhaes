import { User, performPurchase } from "..";
describe ("Exercicio 2", ()=> {
  
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