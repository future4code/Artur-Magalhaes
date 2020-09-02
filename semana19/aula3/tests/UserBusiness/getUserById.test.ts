import { UserBusiness } from "../../src/business/UserBusiness";
import { User } from "../../src/model/User";

describe("2.",() => {

  let userDatabase = {
      user: jest.fn((user: User) => {})
  }
  let idGenerator = {}
  let hashGenerator = {}
  let tokenGenerator = {}
    
  test.skip("a) Erro de usuário não existente.", async () => {
    expect.assertions(2);
    try {
        
        const userBusiness = new UserBusiness(
            userDatabase as any, 
            idGenerator as any, 
            hashGenerator as any, 
            tokenGenerator as any
        );

        await userBusiness.getUserById("002");
        
    } catch (error) {
        expect(error.errorCode).toBe(404);
        expect(error.message).toEqual("User not found");
    }
  });

  test.skip("b) Resposta de sucesso", async() => {
      expect.assertions(1);
      try {
          
          const userBusiness = new UserBusiness(
            userDatabase as any, 
            idGenerator as any, 
            hashGenerator as any, 
            tokenGenerator as any
          );

          const result = await userBusiness.getUserById("0d594b0a-f34d-4d01-a951-c233a0ab6c88")
          console.log(result)
          
          expect(userDatabase.user).toBeCalled();
      } catch (error) {
          
      }
  });
});