import * as jwt from 'jsonwebtoken';

interface AuthentitionData {
    id: string
}

export class Authenticator {
    private static EXPIRES_IN = '1min';

    public generateToken(input: AuthentitionData): string {
        const token = jwt.sign(
            {id: input},
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
        return token;
    }

    public getData = (token: string): AuthentitionData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id
        }
        return result
    }
}
