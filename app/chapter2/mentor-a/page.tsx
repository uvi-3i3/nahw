"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function MentorAPage() {
  const [subjectEnding, setSubjectEnding] = useState<string | null>(null);
  const [predicateEnding, setPredicateEnding] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const correctSubjectEnding = "damma";
  const correctPredicateEnding = "una"; // Corresponds to the -ūna ending for sound masculine plural

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
            <span className="font-arabic">صحيح.</span> <span className="font-arabic">المبتدأ</span> ← <span className="font-arabic">ـُ</span>. 
            <span className="font-arabic">الخبر</span> ← <span className="font-arabic">ـُونَ</span> (<span className="font-arabic">مرفوع</span>).
          </>
        );
      } else {
        setFeedback(
          <>
            <span className="font-arabic">حاول مرة أخرى.</span> كلاهما 
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
        <h1 className="text-4xl font-bold">Mentor A: The Nominal Way</h1>
        <p className="text-lg">
          أمّ اللغة تبتسم: لنتدرّب على <GlossaryTerm termKey="jumla_ismiyyah"><span className="font-arabic">جملة اسمية</span></GlossaryTerm>. اختر العلامات الصحيحة.
        </p>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <p className="text-lg mb-4">
            Choose the correct endings: <span className="font-arabic">الْقَوْمُ صالِحُونَ</span>
          </p>
          <div className="mb-2">
            <button
              onClick={() => setShowHint((v) => !v)}
              className="text-sm underline text-blue-700 dark:text-blue-400"
            >
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <div className="mt-2 text-left text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">
                <span className="font-arabic">المبتدأ</span> <span className="font-arabic">الْقَوْمُ</span> ← ضمّة (ـُ). 
                <span className="font-arabic">الخبر</span> <span className="font-arabic">صالِحُونَ</span> ← جمع مذكّر سالم <span className="font-arabic">مرفوع</span> (ـُونَ).
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="font-semibold font-arabic">الْقَوْمُ</p>
              <div className="flex flex-col gap-2 mt-2">
                <button onClick={() => handleSubjectSelection("damma")} className={`p-2 rounded ${subjectEnding === 'damma' ? (isSubjectCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-300 dark:bg-gray-700'}`}><span className="font-arabic">ـُ</span></button>
                <button onClick={() => handleSubjectSelection("fatha")} className={`p-2 rounded ${subjectEnding === 'fatha' ? (isSubjectCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-300 dark:bg-gray-700'}`}><span className="font-arabic">ـَ</span></button>
              </div>
            </div>
            <div>
              <p className="font-semibold font-arabic">صالِحُونَ</p>
              <div className="flex flex-col gap-2 mt-2">
                <button onClick={() => handlePredicateSelection("una")} className={`p-2 rounded ${predicateEnding === 'una' ? (isPredicateCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-300 dark:bg-gray-700'}`}><span className="font-arabic">ـُونَ</span></button>
                <button onClick={() => handlePredicateSelection("ina")} className={`p-2 rounded ${predicateEnding === 'ina' ? (isPredicateCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-300 dark:bg-gray-700'}`}><span className="font-arabic">ـِينَ</span></button>
              </div>
            </div>
          </div>

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg ${(isSubjectCorrect && isPredicateCorrect) ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100' : 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100'}`}>
              <div>{feedback}</div>
            </div>
          )}
        </div>

        <Link href="/chapter2">
          <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
            Back to Courtyard
          </button>
        </Link>
      </main>
    </div>
  );
}