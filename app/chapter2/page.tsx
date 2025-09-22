"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Chapter2Page() {
  const [mounted, setMounted] = useState(false);
  const [completeA, setCompleteA] = useState(false);
  const [completeB, setCompleteB] = useState(false);
  const [completeC, setCompleteC] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      setCompleteA(localStorage.getItem('ch2_mentor_a_complete') === 'true');
      setCompleteB(localStorage.getItem('ch2_mentor_b_complete') === 'true');
      setCompleteC(localStorage.getItem('ch2_mentor_c_complete') === 'true');
    } catch {}
  }, []);

  const completedCount = Number(completeA) + Number(completeB) + Number(completeC);
  const canProceed = completeA && completeB && completeC;
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
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col gap-8 items-center text-center w-full max-w-5xl">
        <h1 className="text-4xl font-bold heading-accent">Chapter 2: The Scholar’s Courtyard</h1>
        <div className="story-strip w-full">
          Three mentors await. Finish all to unlock Chapter 3.
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full mt-8">
          {mentors.map((mentor) => (
            <Link href={mentor.link} key={mentor.name}>
              <div className="themed-card p-6 md:p-8 h-full flex flex-col justify-between cursor-pointer transition-transform hover:shadow-md active:scale-[0.98]">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{mentor.name}</h2>
                  <p>{mentor.focus}</p>
                </div>
                <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center shadow-sm active:scale-[0.98]">
                  Begin Lesson
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full text-sm text-left text-gray-400">
          Progress: {completedCount}/3 mentors completed
        </div>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="/">
            <button className="rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">
              Back to Prologue
            </button>
          </Link>
          {canProceed ? (
            <Link href="/chapter3">
              <button className="rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">
                Proceed to Chapter 3
              </button>
            </Link>
          ) : (
            <button
              className="rounded-full bg-gray-600 text-white font-bold text-lg py-3 px-8 opacity-60 cursor-not-allowed"
              disabled
              title="Finish all mentors to unlock"
            >
              Locked: Finish all mentors
            </button>
          )}
        </div>
      </main>
    </div>
  );
}