import { UserBusiness } from "../../src/business/UserBusiness"

describe("4.", () => {

  let userDatabase = {}
  let idGenerator = {}
  let hashGenerator = {}
  let tokenGenerator = {}

    test("a", async() => {
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
    })
})