"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function PathIsmPage() {
  const [isIdafa, setIsIdafa] = useState<string | null>(null);
  const [isDefinite, setIsDefinite] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const check = () => {
    const idafaCorrect = isIdafa === "yes";
    const definiteCorrect = isDefinite === "yes";

    if (idafaCorrect && definiteCorrect) {
      setFeedback(
        <>
          Correct. This is <GlossaryTerm termKey="idafa">iḍāfa</GlossaryTerm>.
          Second word is <GlossaryTerm termKey="majrur">majrūr</GlossaryTerm>.
          Because it is <GlossaryTerm termKey="marifah">definite</GlossaryTerm>, the whole phrase is definite.
        </>
      );
    } else {
      setFeedback(
        <>
          Tip: In <GlossaryTerm termKey="idafa">iḍāfa</GlossaryTerm>, the second word is
          <GlossaryTerm termKey="majrur">majrūr</GlossaryTerm>. If the second is
          <GlossaryTerm termKey="marifah">definite</GlossaryTerm>, the phrase is definite.
        </>
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Path of Ism</h1>
        <p className="text-lg">Definiteness and iḍāfa</p>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <div className="mb-2">
            <button
              onClick={() => setShowHint((v) => !v)}
              className="text-sm underline text-blue-700 dark:text-blue-400"
            >
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <div className="mt-2 text-left text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">
                In <GlossaryTerm termKey="idafa">iḍāfa</GlossaryTerm>, the second word is
                <GlossaryTerm termKey="majrur">majrūr</GlossaryTerm>. If the second is
                <GlossaryTerm termKey="marifah">definite</GlossaryTerm>, the whole phrase is definite.
              </div>
            )}
          </div>
          <div className="text-3xl font-arabic mb-4" dir="rtl">
            بَيْتُ الطَّالِبِ
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">Is this an <GlossaryTerm termKey="idafa">iḍāfa</GlossaryTerm>?</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setIsIdafa("yes")} className={`p-2 rounded ${isIdafa === "yes" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Yes</button>
                <button onClick={() => setIsIdafa("no")} className={`p-2 rounded ${isIdafa === "no" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>No</button>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Is the whole phrase <GlossaryTerm termKey="marifah">definite</GlossaryTerm>?</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setIsDefinite("yes")} className={`p-2 rounded ${isDefinite === "yes" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Yes</button>
                <button onClick={() => setIsDefinite("no")} className={`p-2 rounded ${isDefinite === "no" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>No</button>
              </div>
            </div>
          </div>

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors" disabled={!isIdafa || !isDefinite}>
            Check Answer
          </button>

          {feedback && <div className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-left">{feedback}</div>}
        </div>

        <Link href="/chapter3">
          <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">Back to Garden</button>
        </Link>
      </main>
    </div>
  );
}
