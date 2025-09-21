import Link from "next/link";

export default function Chapter3Page() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl">
        <h1 className="text-4xl font-bold">Chapter 3: The Garden of Wisdom</h1>
        <p className="text-lg">
          Three paths unfold before you. Walk any path to deepen your mastery.
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-full mt-6">
          <Link href="/chapter3/ism">
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col justify-between hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div>
                <h2 className="text-2xl font-bold mb-2">Path of Ism</h2>
                <p>Definiteness, iḍāfa, and how meaning shapes case.</p>
              </div>
              <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center">
                Enter
              </button>
            </div>
          </Link>

          <Link href="/chapter3/harf">
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col justify-between hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div>
                <h2 className="text-2xl font-bold mb-2">Path of Harf</h2>
                <p>Particles and prepositions that govern cases.</p>
              </div>
              <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center">
                Enter
              </button>
            </div>
          </Link>

          <Link href="/chapter3/fil">
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col justify-between hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div>
                <h2 className="text-2xl font-bold mb-2">Path of Fi‘l</h2>
                <p>Verbs, triliteral roots, and derived meanings.</p>
              </div>
              <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center">
                Enter
              </button>
            </div>
          </Link>
        </div>

        <Link href="/chapter2">
          <button className="mt-8 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
            Back to Courtyard
          </button>
        </Link>
      </main>
    </div>
  );
}
