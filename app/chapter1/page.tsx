"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../components/GlossaryTerm";

export default function Chapter1Page() {
  const [subjectEnding, setSubjectEnding] = useState<string | null>(null);
  const [predicateEnding, setPredicateEnding] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);

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
            Excellent! Both endings are correct. The{" "}
            <GlossaryTerm termKey="mubtada">mubtada' (subject)</GlossaryTerm> and{" "}
            <GlossaryTerm termKey="khabar">khabar (predicate)</GlossaryTerm> are
            both in the{" "}
            <GlossaryTerm termKey="marfu">marfūʿ (nominative)</GlossaryTerm> case.
          </>
        );
      } else if (isSubjectCorrect) {
        setFeedback(
          <>
            The subject's ending is correct, but the predicate's is not.
            Remember, the{" "}
            <GlossaryTerm termKey="khabar">khabar</GlossaryTerm> is also{" "}
            <GlossaryTerm termKey="marfu">marfūʿ</GlossaryTerm>.
          </>
        );
      } else if (isPredicateCorrect) {
        setFeedback(
          <>
            The predicate's ending is correct, but the subject's is not.
            Remember, the{" "}
            <GlossaryTerm termKey="mubtada">mubtada'</GlossaryTerm> is{" "}
            <GlossaryTerm termKey="marfu">marfūʿ</GlossaryTerm>.
          </>
        );
      } else {
        setFeedback(
          <>
            Neither ending is correct. Try again! Both the{" "}
            <GlossaryTerm termKey="mubtada">mubtada'</GlossaryTerm> and{" "}
            <GlossaryTerm termKey="khabar">khabar</GlossaryTerm> should be{" "}
            <GlossaryTerm termKey="marfu">marfūʿ</GlossaryTerm>.
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
          Welcome to the first chapter of your journey. Here, you will learn to
          distinguish between the subject (
          <GlossaryTerm termKey="mubtada">
            <span className="font-arabic">مبتدأ</span>
          </GlossaryTerm>
          ) and predicate (
          <GlossaryTerm termKey="khabar">
            <span className="font-arabic">خبر</span>
          </GlossaryTerm>
          ) in nominal sentences, and understand their correct case markings.
        </div>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise:</p>
          <p className="text-lg mb-4">
            Add the correct case endings to the words in the following sentence:
          </p>
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
