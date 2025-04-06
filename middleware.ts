import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { auth } from "@/auth";

// const protectedRoutes = ["/createchannel","/audioUpload","/"];
// const authorizedRoutes = ["/auth/login","/auth/signup"];

export default async function middleware(request: NextRequest) {
    // const session = await auth();
    // const { pathname } = request?.nextUrl;
    // const isProtected = protectedRoutes?.some((route) =>
    //     pathname?.startsWith(route)
    // );
    // console.log("isProtected", isProtected);
    // if (isProtected && !session) {
    //     return NextResponse.redirect(new URL("/auth/login", request?.url));
    // }

    return NextResponse.next();
}
