"use client";
import { login } from "@/libs/actions/auth";

export const SignInGoogle = () => {
    return (<>
        <button onClick={() => login({provide:"google"})}>
            Sign In With Google
        </button>
    </>);
};
