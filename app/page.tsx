import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">The City of Language</h1>
        <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Ornate gates with calligraphy...</p>
        </div>
        <p className="text-lg">
          Welcome to a city for learning Quranic grammar (Nahw). Let's start simple.
        </p>
        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-xl font-semibold mb-4">Welcome.</p>
          <p className="text-lg">Before you start, take a short diagnostic test.</p>
        </div>
        <Link href="/diagnostic">
          <button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors">
            Begin Diagnostic
          </button>
        </Link>
      </main>
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2025 Quranic Nahw RPG. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
