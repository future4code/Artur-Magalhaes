import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole } from "../../src/model/User";

describe("2.",() => {

  let userDatabase = {}
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
      expect.assertions(2);
      try {

          const userBusiness = new UserBusiness(
            userDatabase as any, 
            idGenerator as any, 
            hashGenerator as any, 
            tokenGenerator as any
          );


          const data = {
            user: {
              id: '0d594b0a-f34d-4d01-a951-c233a0ab6c88',
              name: 'Lewa',
              email: 'lewa@gmail.com',
              password: '$2a$12$vT5S9Jcinmh/EOCRrsCDEexXELBXwhHZzV3.KhN0jQJOCno9/DJH6',
              role: 'admin'
            }
          }

          let getUserById = jest.fn((id: string) => {
            return new User(id, "Lewa", "lewa@gmail.com", "$2a$12$vT5S9Jcinmh/EOCRrsCDEexXELBXwhHZzV3.KhN0jQJOCno9/DJH6",
            UserRole.ADMIN)
          })
          userDatabase = {getUserById}

          const result = await userBusiness.getUserById("0d594b0a-f34d-4d01-a951-c233a0ab6c88")

          expect(result).toEqual({
            user: {
              id: '0d594b0a-f34d-4d01-a951-c233a0ab6c88',
              name: 'Lewa',
              email: 'lewa@gmail.com',
              password: '$2a$12$vT5S9Jcinmh/EOCRrsCDEexXELBXwhHZzV3.KhN0jQJOCno9/DJH6',
              role: 'admin'
            }
          });
          expect(getUserById).toHaveBeenCalledWith("lewa@gmail.com");
      } catch (error) {
          
      }
  });
});