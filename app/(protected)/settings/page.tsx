"use client";

import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";


const SettingsPage = () => {

const user = useCurrentUser();
const session = useSession();

const onClick = () => {
  logout();
}
  
  return (
    <div className="bg-white p-10 rounded-xl">
        <form>
            <button onClick={onClick} type="submit">
                Sign out
            </button>
        </form>
    </div>
  )
}

export default SettingsPage;