"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function PathHarfPage() {
  const [khabarEnd, setKhabarEnd] = useState<string | null>(null);
  const [sahihEnd, setSahihEnd] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);

  const check = () => {
    const khabarCorrect = khabarEnd === "fatha"; // إنّ تنصب الاسم
    const sahihCorrect = sahihEnd === "dammatan"; // خبر إنّ مرفوع (تنويـن الضم)

    if (khabarCorrect && sahihCorrect) {
      setFeedback(
        <>
          Great! With <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm>, the noun after it becomes
          <GlossaryTerm termKey="mansub">manṣūb</GlossaryTerm> → <span className="font-arabic">الْخَبَرَ</span>.
          The predicate remains <GlossaryTerm termKey="marfu">marfūʿ</GlossaryTerm> → <span className="font-arabic">صَحِيحٌ</span>.
        </>
      );
    } else {
      setFeedback(
        <>
          Not quite. <GlossaryTerm termKey="inna">إنَّ</GlossaryTerm> makes the following noun
          <GlossaryTerm termKey="mansub">manṣūبًا</GlossaryTerm>, while its predicate is
          <GlossaryTerm termKey="marfu">marfūʿ</GlossaryTerm>.
        </>
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Path of Harf</h1>
        <p className="text-lg">Particles that govern cases</p>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise: Apply إنَّ correctly</p>
          <div className="text-3xl font-arabic mb-4" dir="rtl">
            إِنَّ الْخَبَر
            {khabarEnd === "fatha" ? "َ" : khabarEnd === "damma" ? "ُ" : khabarEnd === "kasra" ? "ِ" : <span className="text-blue-500"> ـ </span>}
            {" "}صَحِيح
            {sahihEnd === "dammatan" ? "ٌ" : sahihEnd === "fathatan" ? "ً" : sahihEnd === "kasratan" ? "ٍ" : <span className="text-blue-500"> ـ </span>}
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">Ending for <span className="font-arabic">الْخَبَر</span>:</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setKhabarEnd("fatha")} className={`p-2 rounded ${khabarEnd === "fatha" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Fatha (ـَ)</button>
                <button onClick={() => setKhabarEnd("damma")} className={`p-2 rounded ${khabarEnd === "damma" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Damma (ـُ)</button>
                <button onClick={() => setKhabarEnd("kasra")} className={`p-2 rounded ${khabarEnd === "kasra" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Kasra (ـِ)</button>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Ending for <span className="font-arabic">صَحِيح</span>:</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setSahihEnd("dammatan")} className={`p-2 rounded ${sahihEnd === "dammatan" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Dammatan (ـٌ)</button>
                <button onClick={() => setSahihEnd("fathatan")} className={`p-2 rounded ${sahihEnd === "fathatan" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Fathatan (ـً)</button>
                <button onClick={() => setSahihEnd("kasratan")} className={`p-2 rounded ${sahihEnd === "kasratan" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Kasratan (ـٍ)</button>
              </div>
            </div>
          </div>

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors" disabled={!khabarEnd || !sahihEnd}>
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
