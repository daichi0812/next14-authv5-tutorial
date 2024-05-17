"use server"

import { signOut } from "@/auth"
import { redirect } from "next/dist/server/api-utils";

export const logout = async () => {
    // some server stuff
    await signOut({
        redirectTo: "/auth/login"
    });
}