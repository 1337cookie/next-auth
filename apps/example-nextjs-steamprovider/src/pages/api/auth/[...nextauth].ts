import NextAuth from "next-auth/packages/next-auth/src/next"
import SteamProvider from "next-auth/packages/next-auth/src/providers/steam";

export const authOptions = {
    // Configure one or more authentication providers
    secret: 'asdfkadsjfadsjkfasdkfsdfjasfds',
    providers: [
        SteamProvider({
            // key is revoked
            apiKey: '43F7B9E9D2D198C89066E9A58C46BB93',
        }),
    ],
}

export default NextAuth(authOptions);
