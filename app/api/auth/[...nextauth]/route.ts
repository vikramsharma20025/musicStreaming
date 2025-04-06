// import NextAuth from "next-auth";
// import Github from 'next-auth/providers/github';



// const handlers = NextAuth({
//     providers: [Github({
//         clientId: process.env.AUTH_GITHUB_ID??"",
//         clientSecret: process.env.AUTH_GITHUB_SECRET??"",
//     })],
// });

// export { handlers as GET, handlers as POST };
import { handlers } from "@/auth";

export const { GET, POST } = handlers;