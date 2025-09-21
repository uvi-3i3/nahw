"use client";

import Link from "next/link";

export default function Chapter2Page() {
  const mentors = [
    {
      name: "Mentor A — The Nominal Way",
      focus: "Nominal sentence and endings.",
      link: "/chapter2/mentor-a",
    },
    {
      name: "Mentor B — The Verbal Path",
      focus: "Verbal sentence and subject.",
      link: "/chapter2/mentor-b",
    },
    {
      name: "Mentor C — Cases in the Quran",
      focus: "Case endings with particles.",
      link: "/chapter2/mentor-c",
    },
  ];

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl">
        <h1 className="text-4xl font-bold">Chapter 2: The Scholar’s Courtyard</h1>
        <p className="text-lg">
          You enter a wide, shaded courtyard. The murmur of study surrounds you as three circles of students sit with their mentors.
          Choose any mentor to begin.
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-full mt-8">
          {mentors.map((mentor) => (
            <Link href={mentor.link} key={mentor.name}>
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col justify-between hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{mentor.name}</h2>
                  <p>{mentor.focus}</p>
                </div>
                <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center">
                  Begin Lesson
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="/">
            <button className="rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
              Back to Prologue
            </button>
          </Link>
          <Link href="/chapter3">
            <button className="rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors">
              Proceed to Chapter 3
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}