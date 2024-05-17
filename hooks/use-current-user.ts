import { useSession } from "next-auth/react";

/* クライアント側のデータ情報（たぶん） */

export const useCurrentUser = () => {
    const session = useSession();

    return session.data?.user;
}