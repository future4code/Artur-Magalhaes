import * as bcryptjs from 'bcryptjs';

export class HashManager {
    public async hash(s: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcryptjs.genSalt(rounds);
        const cypherText = await bcryptjs.hash(s, salt);
        return cypherText;
    }

    public async compare(s: string, hash: string): Promise<boolean> {
        return bcryptjs.compare(s, hash);
    }

}