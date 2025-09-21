import Link from "next/link";

export default function MentorCPage() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Mentor C: Cases in the Quran</h1>
        <p className="text-lg">
          Coming soon: Case endings in Quranic context, particles that govern cases, and
          short ayah-based exercises.
        </p>
        <Link href="/chapter2">
          <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
            Back to Courtyard
          </button>
        </Link>
      </main>
    </div>
  );
}
