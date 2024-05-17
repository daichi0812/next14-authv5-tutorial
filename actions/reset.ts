"use server"
import * as z from "zod"

import { ResetSchema } from "@/schemas" 
import { getUserByEmail  } from "@/data/user"
import { sendPasswordResetEmail } from "@/lib/mail"
import { generatePasswordResetToken } from "@/lib/tokens"

export const reset = async ( values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if( !validatedFields.success ){
        return { error: "正しくないメールアドレスです！" }
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail( email );

    if( !existingUser ){
        return { error: "メールアドレスが見つかりません！" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    // console.log(passwordResetToken);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
    );

    return { success: "再設定用のメールを送りました！" };
}