"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import * as z from "zod"

export const settings = async (values:z.infer<typeof SettingsSchema>) => {
    const user = await currentUser();

    if(!user) {
        return { error:"Unathorized current user"}
    }

    const dbUser = await  getUserById(user.id);

    if(!dbUser) {
        return { error:"Unathorized db user"}
    }

    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
      }

    await db.user.update({
        where:{id:dbUser.id},
        data:{...values}
    })

    return { success:"Settings Updated!"}
}