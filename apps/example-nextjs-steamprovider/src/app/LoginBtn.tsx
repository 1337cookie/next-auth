'use client';
import {signIn} from 'next-auth/packages/next-auth/src/react'

const LoginBtn = () => {
    return (
        <img src={"/steam.png"} onClick={() => signIn('steam')} />
    )
}
export default LoginBtn

/*

        <button onClick={() => signIn('steam')}>Sign in</button>
 */