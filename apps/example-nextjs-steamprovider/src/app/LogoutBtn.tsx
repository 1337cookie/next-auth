'use client';
import {signOut} from 'next-auth/packages/next-auth/src/react';
const LogoutBtn = () => {
    return (
        <button onClick={() => signOut()}>Sign out</button>
    )
}
export default LogoutBtn;