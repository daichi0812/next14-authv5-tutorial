"use server"

import { currentRole } from "@/lib/auth"
import { UserRole } from "@prisma/client";

export const admin = async () => {
    const role = await currentRole();

    if (role === UserRole.ADMIN) {
        return { success: "許可されたサーバーアクションです！ (Allowed Server Action!)" }
    }

    return { error: "禁止されたサーバーアクションです！ (Forbidden Server Action!)" }
}