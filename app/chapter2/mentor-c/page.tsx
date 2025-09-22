"use client";

import Link from "next/link";
import { useState, ReactNode, useMemo } from "react";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function MentorCPage() {
  const [allah, setAllah] = useState<string | null>(null);
  const [sabirin, setSabirin] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const markMentorComplete = () => {
    try {
      localStorage.setItem('ch2_mentor_c_complete', 'true');
      const a = localStorage.getItem('ch2_mentor_a_complete') === 'true';
      const b = localStorage.getItem('ch2_mentor_b_complete') === 'true';
      const c = localStorage.getItem('ch2_mentor_c_complete') === 'true';
      if (a && b && c) {
        localStorage.setItem('ch2Complete', 'true');
      }
    } catch (_) {}
  };

  const check = () => {
    const isAllahCorrect = allah === "fatha"; // إنّ makes الاسم منصوب
    const isSabirinCorrect = sabirin === "ina"; // معَ -> majrūr (sound masc. plural → ـِينَ)

    if (isAllahCorrect && isSabirinCorrect) {
      setFeedback(
        <>
          صحيح. بعد <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm>: <span className="font-arabic">اللَّهَ</span> (<span className="font-arabic">ـَ</span>).
          وبعد <span className="font-arabic">مَعَ</span>: <span className="font-arabic">الصَّابِرِينَ</span> (<span className="font-arabic">ـِينَ</span>).
        </>
      );
      markMentorComplete();
    } else {
      setFeedback(
        <>
          تلميح: <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> ← الاسم التالي 
          <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm>.
          <span className="font-arabic">مَعَ</span> ← الكلمة التالية 
          <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm>.
        </>
      );
    }
  };

  // Shuffle helper and memoized option arrays to vary positions
  function shuffle<T>(array: T[]): T[] {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const allahOptions = useMemo(
    () =>
      shuffle([
        { value: "damma", label: <span className="font-arabic">ـُ</span> },
        { value: "fatha", label: <span className="font-arabic">ـَ</span> },
        { value: "kasra", label: <span className="font-arabic">ـِ</span> },
      ]),
    []
  );

  const sabirinOptions = useMemo(
    () =>
      shuffle([
        { value: "una", label: <span className="font-arabic">ـُونَ</span> },
        { value: "ina", label: <span className="font-arabic">ـِينَ</span> },
        { value: "un", label: <span className="font-arabic">ـٌ</span> },
      ]),
    []
  );

  const isCorrect = allah === "fatha" && sabirin === "ina";

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col gap-8 items-center text-center w-full max-w-xl sm:max-w-2xl">
        <h1 className="text-4xl font-bold">Mentor C: Cases in the Quran</h1>
        <p className="text-lg">
          اختر النهايات الصحيحة. <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> تنصب الاسم، و<span className="font-arabic">مَعَ</span> تجرّ ما بعدها.
        </p>

        <div className="themed-card p-6 md:p-8 w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <p className="text-lg mb-2"><span className="font-arabic">اختر النهايات الصحيحة:</span></p>
          <div className="mb-2">
            <button
              onClick={() => setShowHint((v) => !v)}
              className="text-sm underline text-blue-700 dark:text-blue-400"
            >
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <div className="mt-2 text-left text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">
                <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> ← الاسم التالي 
                <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm> (<span className="font-arabic">ـَ/ـً</span>). 
                <span className="font-arabic">مَعَ</span> ← الكلمة التالية 
                <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm>. 
                جمع مذكّر سالم في الجر/النصب: <span className="font-arabic">ـِينَ</span>.
              </div>
            )}
          </div>
          <div className="text-4xl font-arabic mb-4" dir="rtl">
            إِنَّ اللّٰه
            {allah === "damma" ? "ُ" : allah === "fatha" ? "َ" : allah === "kasra" ? "ِ" : <span className="text-blue-500"> ـ </span>}
            {" "}مَعَ الصَّابِر
            {sabirin === "una" ? "ونَ" : sabirin === "ina" ? "ينَ" : sabirin === "un" ? "ٌ" : <span className="text-blue-500"> ـ </span>}
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">اختر علامة آخر <span className="font-arabic">اللّٰه</span>:</p>
              <div className="flex flex-col gap-2">
                {allahOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAllah(opt.value)}
                    className={`p-3 rounded-lg flex items-center justify-center text-center text-2xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors transition-transform active:scale-[0.98] ${
                      allah === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">اختر علامة آخر <span className="font-arabic">الصَّابِر</span>:</p>
              <div className="flex flex-col gap-2">
                {sabirinOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSabirin(opt.value)}
                    className={`p-3 rounded-lg flex items-center justify-center text-center text-2xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors transition-transform active:scale-[0.98] ${
                      sabirin === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]" disabled={!allah || !sabirin}>
            Check Answer
          </button>

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 animate-correct' : 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 animate-wrong'} fade-in-up text-left`}>
              {feedback}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Link href="/chapter2">
            <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">Back to Courtyard</button>
          </Link>
          <Link href="/chapter3">
            <button className="mt-4 rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">Proceed to Chapter 3</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
