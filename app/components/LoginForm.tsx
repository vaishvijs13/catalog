"use client";

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn('credentials', {
                email, password, redirect: false,
            });

            if (res.error) {
                setError("Incorrect email or password");
                return;
            }
            router.replace("landing");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-end items-center h-full">
            <div className="shadow-lg p-12 rounded-lg border-t-4 border-blue-light bg-white">
                <h1 className="text-xl font-bold text-gray-dark mb-8">Welcome Back!</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
                    <input onChange={e => setPassword(e.target.value)} type="text" placeholder="Password" />
                    <button className="bg-gray-dark text-gray-100 px-6 py-2 cursor-pointer">Login</button>
                    {error && (
                        <div className="text-red-800 w-fit mt-2 font-bold text-sm">{error}</div>
                    )}
                    <Link href={"/register"} className="text-gray-dark text-right text-sm">Don't have an account? <span className="underline">Register</span>
                    </Link>
                </form>

            </div>
        </div>
    )
}