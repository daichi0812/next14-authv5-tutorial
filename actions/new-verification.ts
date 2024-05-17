"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async ( token: string ) => {
    const existingToken = await getVerificationTokenByToken(token);

    if( !existingToken ){
        return { error: "トークンが存在しません！" } // ← 開発環境だとダブルuseEffectによってこれが表示される
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if( hasExpired ){
        return { error: "トークンの有効期限が切れています！"}
    }

    const existingUser = await getUserByEmail( existingToken.email );

    if( !existingUser ){
        return { error: "存在しないメールアドレスです！" };
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email  // ← なぜこれ必要？ ユーザーがsettingsでメールを変更した時用らしい(?)
        }
    });

    await db.verificationToken.delete({
        where: { id: existingToken.id }
    });

    return { success: "メールアドレスが認証されました！" };
};