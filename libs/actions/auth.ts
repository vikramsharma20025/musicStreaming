// 'use server';

// import { signIn,signOut } from "@/auth";

// export const login = async () => {
//     await signIn("github", {redirectTo: "/"});
// };

// export const logout = async () => {
//     await signOut({redirectTo: "/"});
// };
"use server";

import { signIn, signOut } from "@/auth";
import { auth } from "@/auth";

export const login = async ({provide}:{provide:string}) => {
    await signIn(provide, { redirectTo: "/" });
    // save the session in mongodb storage on server and for that send the session to the server
    const session = await auth();
    await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ session }),
    }).then((res) => {
        if (res?.status === 200) {
            console.log("session saved in mongodb");
        } else {
            console.log("session not saved in mongodb");
        }
    }
    );
    console.log("session", session);
};

export const logout = async () => {
    await signOut({ redirectTo: "/" });
};
