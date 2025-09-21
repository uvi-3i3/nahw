"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function MentorBPage() {
  const [selectedSentenceType, setSelectedSentenceType] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleCheck = () => {
    const isTypeCorrect = selectedSentenceType === "fiiliyya";
    const isSubjectCorrect = selectedSubject === "talib";

    if (isTypeCorrect && isSubjectCorrect) {
      setFeedback(
        <>
          Correct. <span className="font-arabic">جملة فعلية</span>. <span className="font-arabic">الفاعل</span>: <span className="font-arabic">الطَّالِبُ</span>. <span className="font-arabic">المفعول به</span>: <span className="font-arabic">الدَّرْسَ</span>.
        </>
      );
    } else {
      setFeedback(
        <>
          Tip: <GlossaryTerm termKey="fiil"><span className="font-arabic">فعل</span></GlossaryTerm> first. <GlossaryTerm termKey="faail"><span className="font-arabic">فاعل</span></GlossaryTerm> is <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>. <GlossaryTerm termKey="maful_bihi"><span className="font-arabic">مفعول به</span></GlossaryTerm> is <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm>.
        </>
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Mentor B: The Verbal Path</h1>
        <p className="text-lg">
          The mentor gestures to the text: find the sentence type and the subject (<GlossaryTerm termKey="faail"><span className="font-arabic">فاعل</span></GlossaryTerm>).
        </p>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <p className="text-lg mb-2">Consider the sentence:</p>
          <div className="mb-2">
            <button
              onClick={() => setShowHint((v) => !v)}
              className="text-sm underline text-blue-700 dark:text-blue-400"
            >
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <div className="mt-2 text-left text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">
                <span className="font-arabic">جملة فعلية:</span> <span className="font-arabic">الفعل</span> أولاً. 
                <span className="font-arabic">الفاعل</span> <span className="font-arabic">مرفوع</span> (ـُ). 
                <span className="font-arabic">المفعول به</span> <span className="font-arabic">منصوب</span> (ـَ/ـً).
              </div>
            )}
          </div>
          <div className="text-3xl font-arabic mb-4" dir="rtl">
            كَتَبَ الطَّالِبُ الدَّرْسَ
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">What type of sentence is this?</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedSentenceType("fiiliyya")}
                  className={`p-2 rounded ${selectedSentenceType === "fiiliyya" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                >
                  <GlossaryTerm termKey="jumla_fiiliyya"><span className="font-arabic">جملة فعلية</span></GlossaryTerm>
                </button>
                <button
                  onClick={() => setSelectedSentenceType("ismiyyah")}
                  className={`p-2 rounded ${selectedSentenceType === "ismiyyah" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                >
                  <GlossaryTerm termKey="jumla_ismiyyah"><span className="font-arabic">جملة اسمية</span></GlossaryTerm>
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Who is the subject (<GlossaryTerm termKey="faail"><span className="font-arabic">فاعل</span></GlossaryTerm>)?</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedSubject("talib")}
                  className={`p-2 rounded ${selectedSubject === "talib" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                >
                  <span className="font-arabic">الطَّالِبُ</span>
                </button>
                <button
                  onClick={() => setSelectedSubject("dars")}
                  className={`p-2 rounded ${selectedSubject === "dars" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                >
                  <span className="font-arabic">الدَّرْسَ</span>
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleCheck}
            className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors"
            disabled={!selectedSentenceType || !selectedSubject}
          >
            Check Answer
          </button>

          {feedback && (
            <div className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-left">
              {feedback}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Link href="/chapter2">
            <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
              Back to Courtyard
            </button>
          </Link>
          <Link href="/chapter3">
            <button className="mt-4 rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors">
              Proceed to Chapter 3
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
