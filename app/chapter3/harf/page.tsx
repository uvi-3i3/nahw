"use client";

import Link from "next/link";
import { useState, ReactNode, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function PathHarfPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    try {
      const allowed = localStorage.getItem("ch2Complete") === "true";
      if (!allowed) router.replace("/chapter2");
    } catch {
      router.replace("/chapter2");
    }
  }, [router]);

  if (!mounted) return null;

  const [khabarEnd, setKhabarEnd] = useState<string | null>(null);
  const [sahihEnd, setSahihEnd] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const check = () => {
    const khabarCorrect = khabarEnd === "fatha"; // إنّ تنصب الاسم
    const sahihCorrect = sahihEnd === "dammatan"; // خبر إنّ مرفوع (تنويـن الضم)

    if (khabarCorrect && sahihCorrect) {
      setFeedback(
        <>
          <span className="font-arabic">صحيح.</span> بعد <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm>: <span className="font-arabic">الْخَبَرَ</span> (<span className="font-arabic">ـَ</span>). وخبرها: <span className="font-arabic">صَحِيحٌ</span> (<span className="font-arabic">ـٌ</span>).
        </>
      );
    } else {
      setFeedback(
        <>
          <span className="font-arabic">تلميح:</span> <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> ← الاسم التالي 
          <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm>. والخبر 
          <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>.
        </>
      );
    }
  };

  // Shuffle helper and memoized option arrays for varying positions
  function shuffle<T>(array: T[]): T[] {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const khabarOptions = useMemo(
    () =>
      shuffle([
        { value: "fatha", label: <span className="font-arabic">ـَ</span> },
        { value: "damma", label: <span className="font-arabic">ـُ</span> },
        { value: "kasra", label: <span className="font-arabic">ـِ</span> },
      ]),
    []
  );

  const sahihOptions = useMemo(
    () =>
      shuffle([
        { value: "dammatan", label: <span className="font-arabic">ـٌ</span> },
        { value: "fathatan", label: <span className="font-arabic">ـً</span> },
        { value: "kasratan", label: <span className="font-arabic">ـٍ</span> },
      ]),
    []
  );

  const isCorrect = khabarEnd === "fatha" && sahihEnd === "dammatan";

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col gap-8 items-center text-center w-full max-w-xl sm:max-w-2xl">
        <h1 className="text-4xl font-bold heading-accent">Path of Particle</h1>
        <p className="text-lg"><span className="font-arabic">الحروف والإعراب</span></p>

        <div className="themed-card p-6 md:p-8 w-full">
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
                <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> ← الاسم التالي 
                <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm> (ـَ/ـً). والخبر 
                <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm> (ـُ/ـٌ).
              </div>
            )}
          </div>
          <div className="text-4xl font-arabic mb-4" dir="rtl">
            إِنَّ الْخَبَر
            {khabarEnd === "fatha" ? "َ" : khabarEnd === "damma" ? "ُ" : khabarEnd === "kasra" ? "ِ" : <span className="text-blue-500"> ـ </span>}
            {" "}صَحِيح
            {sahihEnd === "dammatan" ? "ٌ" : sahihEnd === "fathatan" ? "ً" : sahihEnd === "kasratan" ? "ٍ" : <span className="text-blue-500"> ـ </span>}
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">علامة آخر <span className="font-arabic">الْخَبَر</span>:</p>
              <div className="flex flex-col gap-2">
                {khabarOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setKhabarEnd(opt.value)}
                    className={`p-3 rounded-lg flex items-center justify-center text-center text-2xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors transition-transform active:scale-[0.98] ${
                      khabarEnd === opt.value
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
              <p className="font-semibold mb-2">علامة آخر <span className="font-arabic">صَحِيح</span>:</p>
              <div className="flex flex-col gap-2">
                {sahihOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSahihEnd(opt.value)}
                    className={`p-3 rounded-lg flex items-center justify-center text-center text-2xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors transition-transform active:scale-[0.98] ${
                      sahihEnd === opt.value
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

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]" disabled={!khabarEnd || !sahihEnd}>
            Check Answer
          </button>

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 animate-correct' : 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 animate-wrong'} fade-in-up text-left`}>
              {feedback}
            </div>
          )}
        </div>

        <Link href="/chapter3">
          <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">Back to Garden</button>
        </Link>
      </main>
    </div>
  );
}
