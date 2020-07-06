import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("Testa array [0,0,1,1,2,2]", () => {
    const resultado = checaItensDuplicados([0,0,1,1,2,2]);
    expect(resultado).toBe(true);
  });
  test("Testa array [0,1,2,3,0]", () => {
    const resultado = checaItensDuplicados([0,1,2,3,0]);
    expect(resultado).toBe(true);
  });
  test("Testa array [0,1,2,3]", () => {
    const resultado = checaItensDuplicados([0,1,2,3]);
    expect(resultado).toBe(false);
  });
  test("Testa array []", () => {
    const resultado = checaItensDuplicados([]);
    expect(resultado).toBe(false);
  });
  test("Testa array [1,1,1]", () => {
    const resultado = checaItensDuplicados([1,1,1]);
    expect(resultado).toBe(true);
  });
});
