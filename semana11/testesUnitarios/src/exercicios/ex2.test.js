import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  test("retorna true para ovo", () => {
    const ehPalindromo = checaPalindromo("ovo");
    expect(ehPalindromo).toEqual(true);
  });
  test("retorna true para ele", () => {
    const ehPalindromo = checaPalindromo("ele");
    expect(ehPalindromo).toEqual(true);
  });
  test("retorna true para osso", () => {
    const ehPalindromo = checaPalindromo("osso");
    expect(ehPalindromo).toEqual(true);
  });
  test("retorna true para 'A base do teto desaba'", () => {
    const ehPalindromo = checaPalindromo("A base do teto desaba");
    expect(ehPalindromo).toEqual(true);
  });
});
