import jwt from 'jsonwebtoken';

export class Authenticator {

    public generateToken(input: AuthenticatorData): string {
        const token = jwt.sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            });
        return token;
    }

    public verify (token: string) {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        return {
            id: payload.id,
            role: payload.role
        }
    }

}

export interface AuthenticatorData {
    id: string,
    role: string
}