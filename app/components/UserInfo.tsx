"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const { data: session } = useSession();

    return (
    <div className="grid place-items-center">
        <div className="shadow-lg p-40 rounded-lg border-l-4 border-blue-light bg-slate-50 flex flex-col gap-2 my-3">
            <div>Name: <span className="text-gray-dark font-bold">{session?.user?.name}</span></div>
            <div>
                Email: <span className="text-gray-dark font-bold">{session?.user?.email}</span>
            </div>
            <button onClick={() => signOut()} className="mt-6 bg-blue-dark text-white p-3 w-fit rounded-lg text-sm">Log out</button>
        </div>
    </div>
    )
}