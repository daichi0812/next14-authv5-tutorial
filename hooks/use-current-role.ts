import { useSession } from "next-auth/react";

/* クライアント側のデータ情報（たぶん） */

export const useCurrentRole = () => {
    const session = useSession();

    return session.data?.user?.role;
};