"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../components/GlossaryTerm";

export default function Chapter1Page() {
  const [subjectEnding, setSubjectEnding] = useState<string | null>(null);
  const [predicateEnding, setPredicateEnding] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const correctSubjectEnding = "damma";
  const correctPredicateEnding = "dammatan";

  const handleSubjectSelection = (ending: string) => {
    setSubjectEnding(ending);
    updateFeedback(ending, predicateEnding);
  };

  const handlePredicateSelection = (ending: string) => {
    setPredicateEnding(ending);
    updateFeedback(subjectEnding, ending);
  };

  const updateFeedback = (subject: string | null, predicate: string | null) => {
    if (subject && predicate) {
      const isSubjectCorrect = subject === correctSubjectEnding;
      const isPredicateCorrect = predicate === correctPredicateEnding;

      if (isSubjectCorrect && isPredicateCorrect) {
        setFeedback(
          <>
            Correct. Both are <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>.
          </>
        );
      } else if (isSubjectCorrect) {
        setFeedback(
          <>
            Subject is correct. The predicate should be{" "}
            <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>.
          </>
        );
      } else if (isPredicateCorrect) {
        setFeedback(
          <>
            Predicate is correct. The subject should be{" "}
            <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>.
          </>
        );
      } else {
        setFeedback(
          <>
            Not correct. Both the{" "}
            <GlossaryTerm termKey="mubtada"><span className="font-arabic">مبتدأ</span></GlossaryTerm> and{" "}
            <GlossaryTerm termKey="khabar"><span className="font-arabic">خبر</span></GlossaryTerm> should be{" "}
            <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>.
          </>
        );
      }
    }
  };

  const isSubjectCorrect = subjectEnding === correctSubjectEnding;
  const isPredicateCorrect = predicateEnding === correctPredicateEnding;

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Chapter 1: The Paths of Intention</h1>
        <div className="text-lg">
          Learn the nominal sentence. Find the subject (
          <GlossaryTerm termKey="mubtada">
            <span className="font-arabic">مبتدأ</span>
          </GlossaryTerm>
          ) and the predicate (
          <GlossaryTerm termKey="khabar">
            <span className="font-arabic">خبر</span>
          </GlossaryTerm>
          ). Both are usually <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>.
        </div>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise:</p>
          <p className="text-lg mb-4">Choose the correct endings:</p>
          <div className="mb-2">
            <button
              onClick={() => setShowHint((v) => !v)}
              className="text-sm underline text-blue-700 dark:text-blue-400"
            >
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <div className="mt-2 text-left text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">
                Subject (<GlossaryTerm termKey="mubtada"><span className="font-arabic">مبتدأ</span></GlossaryTerm>) uses damma (ـُ). Predicate
                (<GlossaryTerm termKey="khabar"><span className="font-arabic">خبر</span></GlossaryTerm>) uses dammatan (ـٌ).
              </div>
            )}
          </div>
          <div className="text-3xl font-arabic mb-4" dir="rtl">
            الطالب
            {subjectEnding && (
              <span className="text-blue-500">
                {subjectEnding === "damma"
                  ? "ُ"
                  : subjectEnding === "fatha"
                  ? "َ"
                  : "ِ"}
              </span>
            )}
            {" "}
            مجتهد
            {predicateEnding && (
              <span className="text-blue-500">
                {predicateEnding === "dammatan"
                  ? "ٌ"
                  : predicateEnding === "fathatan"
                  ? "ً"
                  : "ٍ"}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold font-arabic">الطالب</p>
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => handleSubjectSelection("damma")}
                  className={`p-2 rounded ${
                    subjectEnding === "damma"
                      ? isSubjectCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  Damma (ـُ)
                </button>
                <button
                  onClick={() => handleSubjectSelection("fatha")}
                  className={`p-2 rounded ${
                    subjectEnding === "fatha"
                      ? isSubjectCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  Fatha (ـَ)
                </button>
                <button
                  onClick={() => handleSubjectSelection("kasra")}
                  className={`p-2 rounded ${
                    subjectEnding === "kasra"
                      ? isSubjectCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  Kasra (ـِ)
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold font-arabic">مجتهد</p>
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => handlePredicateSelection("dammatan")}
                  className={`p-2 rounded ${
                    predicateEnding === "dammatan"
                      ? isPredicateCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  Dammatan (ـٌ)
                </button>
                <button
                  onClick={() => handlePredicateSelection("fathatan")}
                  className={`p-2 rounded ${
                    predicateEnding === "fathatan"
                      ? isPredicateCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  Fathatan (ـً)
                </button>
                <button
                  onClick={() => handlePredicateSelection("kasratan")}
                  className={`p-2 rounded ${
                    predicateEnding === "kasratan"
                      ? isPredicateCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  Kasratan (ـٍ)
                </button>
              </div>
            </div>
          </div>

          {feedback && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                isSubjectCorrect && isPredicateCorrect
                  ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                  : "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100"
              }`}
            >
              <div>{feedback}</div>
            </div>
          )}
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/">
            <button className="rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
              Back to Prologue
            </button>
          </Link>
          <Link href="/chapter2">
            <button className="rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors">
              Proceed to Chapter 2
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
