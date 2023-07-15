"use client"

import { useRedirectFunctions } from "@propelauth/nextjs/client";

const AuthBtn = () => {
    const { redirectToSignupPage, redirectToLoginPage } = useRedirectFunctions()
    return (
        <>
            <div
                onClick={redirectToLoginPage}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 cursor-pointer">
                <h2 className="text-2xl font-semibold">
                    Login{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </div>
            <div
                onClick={redirectToSignupPage}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 cursor-pointer">
                <h2 className="text-2xl font-semibold">
                    Signup{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
            </div>
        </>
    )
}

export default AuthBtn