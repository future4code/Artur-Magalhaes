import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabase } from "../../src/data/UserDatabase"
import { User, UserRole } from "../../src/model/User"

describe("4.", () => {

  let userDatabase = {}
  let idGenerator = {}
  let hashGenerator = {}
  let tokenGenerator = {}

    test.skip("a", async() => {
        expect.assertions(1);
        try {
            const user = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
            )

            await user.getAllUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBkYmNjNDRjLTIzMTMtNDFhMy1hNWM5LWE3Mjk1ZTY3N2RkNiIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE1OTkwNzE3MjAsImV4cCI6MTU5OTA3MjkyMH0.s03KreHW8-TCDvEYPW2W-WQBM70nxmDIQKOA71HoyOc");

        } catch (error) {
            expect(error.message).toBe("Unauthorization")
        }
    });

    test("b)", async() => {
        //expect.assertions(3);
        const user = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        )

        let getAllUsers = jest.fn(() => {
            return new User("id", "name", "email", "password", UserRole.NORMAL)
        });


        userDatabase = {getAllUsers}
        const result = await user.getAllUser("");
        console.log(result)
        expect(getAllUsers).toHaveBeenCalled
        expect(userDatabase).toHaveBeenCalledTimes(1);
        expect(result).toEqual({})
    });
})