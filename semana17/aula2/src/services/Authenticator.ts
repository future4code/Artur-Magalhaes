import * as jwt from 'jsonwebtoken';

enum ROLE {
    normal = 'NORMAL',
    admin = 'ADMIN'
}

interface AuthentitionData {
    id: string,
    role: ROLE
}

export class Authenticator {
    private static EXPIRES_IN = '1min';

    public generateToken(input: AuthentitionData): string {
        const token = jwt.sign(
            {
                id: input.id,
                role: input.role
            },
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
            id: payload.id,
            role: payload.role
        }
        return result
    }
}
