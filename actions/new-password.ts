"use server";

import { NewPasswordSchema } from "@/schemas";
import * as z from "zod";

export const newPassword = async(
    values: z.infer<typeof NewPasswordSchema>,
    token: string | null,
) => {
    if(!token) {
        return {error:"Missing token!"}
    }
}