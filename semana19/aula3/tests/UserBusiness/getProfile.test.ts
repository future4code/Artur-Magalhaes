import { UserBusiness } from "../../src/business/UserBusiness"

describe.skip("6.", () => {
    
  let userDatabase = {}
  let idGenerator = {}
  let hashGenerator = {}
  let tokenGenerator = {}

    test("I.", async() => {
        expect.assertions(1)
        try{
            const user = await new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
        )
    
        await user.getProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8.eyJpZCI6IjBkYmNjNDRjLTIzMTMtNDFhMy1hNWM5LWE3Mjk1ZTY3N2RkNiIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE1OTkwNzE3MjAsImV4cCI6MTU5OTA3MjkyMH0.s03KreHW8-TCDvEYPW2W-WQBM70nxmDIQKOA71HoyOc")
    } catch (error) {
        expect(error.message).toBe("invalid token")
    }
    })
})