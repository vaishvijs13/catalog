import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <main className="flex flex-col items-center justify-center px-20 flex-1 text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8">catalog</h2>
        <h3 className="text-xl md:text-4xl font-thin leading-tight mb-12">the ultimate organization tool for students</h3>
        <div className="space-x-4">
        <Link href="/login" className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-4 px-8 rounded transition duration-300 ease-in-out font-mono">
            Log In
        </Link>
        <Link href="/signup" className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-4 px-8 rounded transition duration-300 ease-in-out font-mono">
            Sign Up
        </Link>
      </div>
      </main>
      <footer className="w-full max-w-4xl p-6 text-center">
        <p>© 2024 catalog. All rights reserved.</p>
      </footer>
    </div>
  );
}
