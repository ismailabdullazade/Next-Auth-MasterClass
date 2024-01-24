
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_SECRET_ID
    }),
    Github({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret:process.env.GITHUB_SECRET_ID
    }),
    Credentials({
      async authorize(credentials){
        const validatedFields = LoginSchema.safeParse(credentials);

        if(validatedFields.success){
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          
          if(!user || !user.password){
            return null;
          }

          const passwordMatch = await bcrypt.compare(password,user.password);

          // checking-password-match-1
          if (!passwordMatch) {
            return { error: "Incorrect password!" };
          }

          if(passwordMatch) return user;
        }
        return null;
      }
    })
  ],
} satisfies NextAuthConfig