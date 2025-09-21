'''"use client";

import Link from "next/link";
import { useState } from "react";

export default function Chapter1Page() {
  const [subjectEnding, setSubjectEnding] = useState<string | null>(null);
  const [predicateEnding, setPredicateEnding] = useState<string | null>(null);

  const correctSubjectEnding = "damma";
  const correctPredicateEnding = "dammatan";

  const handleSubjectSelection = (ending: string) => {
    setSubjectEnding(ending);
  };

  const handlePredicateSelection = (ending: string) => {
    setPredicateEnding(ending);
  };

  const isSubjectCorrect = subjectEnding === correctSubjectEnding;
  const isPredicateCorrect = predicateEnding === correctPredicateEnding;

  let feedback = null;
  if (subjectEnding && predicateEnding) {
    if (isSubjectCorrect && isPredicateCorrect) {
      feedback =
        "Excellent! Both endings are correct. The mubtada' (subject) and khabar (predicate) are both in the marfūʿ (nominative) case.";
    } else if (isSubjectCorrect) {
      feedback =
        "The subject's ending is correct, but the predicate's is not. Remember, the khabar is also marfūʿ.";
    } else if (isPredicateCorrect) {
      feedback =
        "The predicate's ending is correct, but the subject's is not. Remember, the mubtada' is marfūʿ.";
    } else {
      feedback =
        "Neither ending is correct. Try again! Both the mubtada' and khabar should be marfūʿ.";
    }
  }

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Chapter 1: The Paths of Intention</h1>
        <p className="text-lg">
          Welcome to the first chapter of your journey. Here, you will learn to
          distinguish between the subject (          <span className="font-arabic">مبتدأ</span>) and predicate (
          <span className="font-arabic">خبر</span>) in nominal sentences, and
          understand their correct case markings.
        </p>

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
            {' '}
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
              <p>{feedback}</p>
            </div>
          )}
        </div>

        <Link href="/">
          <button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors">
            Back to Prologue
          </button>
        </Link>
      </main>
    </div>
  );
}
'''