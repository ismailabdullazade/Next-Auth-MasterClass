import { db } from "@/lib/db"

// type TwoFactorTokenWhereUniqueInput = {
//     id: string | TwoFactorTokenEmailTokenCompoundUniqueInput;
//     email_token: string | TwoFactorTokenEmailTokenCompoundUniqueInput;
//     // other properties...
//   };

export const getTwoFactorTokenByToken = async (token:string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findUnique({
            where:{token} as any
        });

        return twoFactorToken;
    } catch {
        return null;
    }
}

export const getTwoFactorTokenByEmail = async (email:string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findFirst({
            where:{email}
        });

        return twoFactorToken;
    } catch {
        return null;
    }
};