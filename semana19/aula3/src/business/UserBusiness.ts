import { UserDatabase } from "../data/UserDatabase";
import { User, stringToUserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";
export class UserBusiness {

  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator
  ){}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {

    if (!name || !email || !password || !role) {
      throw new InvalidParameterError("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    const id = this.idGenerator.generate();

    const cryptedPassword = await this.hashGenerator.hash(password);
    
    await this.userDatabase.createUser(
      new User(id, name, email, cryptedPassword, stringToUserRole(role))
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role,
    });
    return { accessToken };
  }

  public async login(email: string, password: string) {
    if (!email || !password) {
      throw new InvalidParameterError("Missing input");
    }

   
    const user = await this.userDatabase.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found");
    }
    
    const isPasswordCorrect = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new InvalidParameterError("Invalid password");
    }

    const accessToken = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });

    return { accessToken };
  }

  public async getUserById(id: string) {

      if(!id) {
        throw new InvalidParameterError("Missing Input");
      }

      const user = await new UserDatabase().getUserById(id);

      if(!user) {
        throw new NotFoundError("User not found");
      }

      return {user};
  }

  public async getAllUser(token: string) {
    const dataToken = new TokenGenerator().verify(token)
    if(!token) {
      throw new GenericError("Invalid Token");
    }
    
    if(stringToUserRole(dataToken.role.toUpperCase()) !== "ADMIN"){
      throw new GenericError("Unauthorization")
    }
    const user = await new UserDatabase().getAllUsers();
    return {user}
  }

  public async getProfile(token: string) {
    const dataToken = new TokenGenerator().verify(token)
    if(!token) {
      throw new GenericError("Invalid Token");
    }
    
    const user = await new UserDatabase().getUserById(dataToken.id);
    
    if(!user) {
      throw new GenericError("user not found");
    }

    return {user}
  }
}
