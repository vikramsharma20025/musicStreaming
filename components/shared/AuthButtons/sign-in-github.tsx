import { login } from "@/lib/actions/auth";

export const SignInGithub = () => {
    return (
    <>
        <button onClick={() => login({provide:"github"})}>
            Sign In With Github
        </button>
    </>);
};
