"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[336px] md:w-[600px] shadow-sm">
            <div className="flex gap-x-2">
                <Button 
                 asChild
                 variant={pathname === "/server"?"default":"outline"}
                >
                    <Link href="/server">
                    <p className="md:flex hidden">Server</p>
                    <p className="flex md:hidden">💻</p>
                    </Link>
                </Button>
                <Button 
                 asChild
                 variant={pathname === "/client"?"default":"outline"}
                >
                    <Link href="/client">
                    <p className="md:flex hidden">Client</p>
                    <p className="flex md:hidden">📱</p>
                    </Link>
                </Button>
                <Button 
                 asChild
                 variant={pathname === "/admin"?"default":"outline"}
                >
                    <Link href="/admin">
                    <p className="md:flex hidden">Admin</p>
                    <p className="flex md:hidden">🔑</p>
                    </Link>
                </Button>

                <Button 
                 asChild
                 variant={pathname === "/settings"?"default":"outline"}
                >
                    <Link href="/settings">
                    <p className="md:flex hidden">Settings</p>
                    <p className="flex md:hidden">⚙</p>
                    </Link>
                </Button>
            </div>
            <UserButton/>
        </nav>
    )
}