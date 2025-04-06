import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
// import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@auth/prisma-adapter";

// const prisma = new PrismaClient();
export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID || "",
        clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    ],
    // adapter: PrismaAdapter(prisma),
});
