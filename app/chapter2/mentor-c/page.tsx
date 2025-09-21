"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function MentorCPage() {
  const [allah, setAllah] = useState<string | null>(null);
  const [sabirin, setSabirin] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);

  const check = () => {
    const isAllahCorrect = allah === "fatha"; // إنّ makes الاسم منصوب
    const isSabirinCorrect = sabirin === "ina"; // معَ -> majrūr (sound masc. plural → ـِينَ)

    if (isAllahCorrect && isSabirinCorrect) {
      setFeedback(
        <>
          Correct. After <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm>: <span className="font-arabic">اللَّهَ</span> (fatha).
          After <span className="font-arabic">مَعَ</span>: <span className="font-arabic">الصَّابِرِينَ</span> (ـِينَ).
        </>
      );
    } else {
      setFeedback(
        <>
          Tip: <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> → next noun is <GlossaryTerm termKey="mansub">manṣūب</GlossaryTerm>.
          <span className="font-arabic">مَعَ</span> → next word is <GlossaryTerm termKey="majrur">majrūr</GlossaryTerm>.
        </>
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Mentor C: Cases in the Quran</h1>
        <p className="text-lg">
          Choose the correct endings. <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> makes the next noun manṣūب.
          <span className="font-arabic"> مَعَ</span> makes the next word majrūr.
        </p>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <p className="text-lg mb-2">Choose the correct endings:</p>
          <div className="text-3xl font-arabic mb-4" dir="rtl">
            إِنَّ اللّٰه
            {allah === "damma" ? "ُ" : allah === "fatha" ? "َ" : allah === "kasra" ? "ِ" : <span className="text-blue-500"> ـ </span>}
            {" "}مَعَ الصَّابِر
            {sabirin === "una" ? "ونَ" : sabirin === "ina" ? "ينَ" : sabirin === "un" ? "ٌ" : <span className="text-blue-500"> ـ </span>}
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">Select ending for <span className="font-arabic">اللّٰه</span>:</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setAllah("damma")} className={`p-2 rounded ${allah === "damma" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Damma (ـُ)</button>
                <button onClick={() => setAllah("fatha")} className={`p-2 rounded ${allah === "fatha" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Fatha (ـَ)</button>
                <button onClick={() => setAllah("kasra")} className={`p-2 rounded ${allah === "kasra" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Kasra (ـِ)</button>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Select ending for <span className="font-arabic">الصَّابِر</span>:</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setSabirin("una")} className={`p-2 rounded ${sabirin === "una" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>ـُونَ</button>
                <button onClick={() => setSabirin("ina")} className={`p-2 rounded ${sabirin === "ina" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>ـِينَ</button>
                <button onClick={() => setSabirin("un")} className={`p-2 rounded ${sabirin === "un" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>ـٌ</button>
              </div>
            </div>
          </div>

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors" disabled={!allah || !sabirin}>
            Check Answer
          </button>

          {feedback && <div className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-left">{feedback}</div>}
        </div>

        <div className="flex gap-4">
          <Link href="/chapter2">
            <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">Back to Courtyard</button>
          </Link>
          <Link href="/chapter3">
            <button className="mt-4 rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors">Proceed to Chapter 3</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
