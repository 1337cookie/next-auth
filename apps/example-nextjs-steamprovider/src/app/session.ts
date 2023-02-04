import { unstable_getServerSession } from 'next-auth/packages/next-auth/src/next/'
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
    return await unstable_getServerSession(authOptions);
}
