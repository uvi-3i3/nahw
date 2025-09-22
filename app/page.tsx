import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col gap-8 items-center text-center w-full max-w-xl sm:max-w-2xl">
        <h1 className="text-4xl font-bold">The City of Language</h1>
        <div className="themed-card w-full h-48 md:h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300">Ornate gates with calligraphy...</p>
        </div>
        <p className="text-lg">
          You stand at the gates of a city devoted to the noble science of <span className="font-arabic">النحو</span>.
          Lamps glow along carved archways, and a warm voice invites you in.
        </p>
        <div className="themed-card p-6 md:p-8 w-full">
          <p className="text-xl font-semibold mb-4">The Gatekeeper</p>
          <p className="text-lg">Welcome, seeker. Take a short diagnostic to find your path.</p>
        </div>
        <Link href="/diagnostic">
          <button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">
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
