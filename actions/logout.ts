"use server";

import { signOut } from "@/auth";

export const logout = async () => {
    // some server stuff before sign out
    await signOut();
}