"use server";

import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";


export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return {error:"Invalid fields"};
    }

    const { email, password, name } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password,10);

    const existingUser = await getUserByEmail(email);
    // if I registered with OAuth(github) then I want to register with credentials but with the same email, it will give me an error, which I did not handled.
    if (existingUser) {
        return { error: "Email already in use"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password:hashedPassword,
        }
    });

    const verificationToken = await generateVerificationToken(email);
    //Send verification token code email;
    await sendVerificationEmail(verificationToken.email,verificationToken.token);

    return {success:"Confirmation email sent!"}
}