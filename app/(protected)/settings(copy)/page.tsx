"use client"

import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
    const session = useCurrentUser();

    return (
        <div>
            {JSON.stringify(session)}
            <form>
                <button type="submit">
                    サインアウト
                </button>
            </form>
        </div>
    )
}

export default SettingsPage