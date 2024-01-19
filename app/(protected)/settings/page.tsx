"use client";

import { useSession, signOut } from "next-auth/react";


const SettingsPage = () => {

const session = useSession();

const onClick = () => {
  signOut();
}
  
  return (
    <div>
        {JSON.stringify(session)}
        <form>
            <button onClick={onClick} type="submit">
                Sign out
            </button>
        </form>
    </div>
  )
}

export default SettingsPage;