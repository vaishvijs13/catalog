"use client";

import Link from 'next/link';
import Image from "next/image";
import LoginForm from './components/LoginForm';

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-900 min-h-screen">
      <div className="flex flex-col md:flex-row px-24 flex-grow">
        <div className="w-3/4 text-left md:px-2">
          <h2 className="text-5xl md:text-9xl font-bold font-serif leading-tight mt-60 mb-10 text-gray-light">catalog</h2>
          <h3 className="text-xl md:text-3xl font-thin leading-tight mb-12 text-gray-light">the ultimate organization tool for students</h3>
        </div>
        <div className="w-1/4">
          <LoginForm />
        </div>
      </div>
      <footer className="w-full p-6 text-center text-gray-light mb-12 md:mb-0">
        <p>© 2024 catalog. All rights reserved.</p>
      </footer>
    </div>
  );
}
