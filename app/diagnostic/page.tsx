"use client";

import { useState, ReactNode, useMemo } from "react";
import Link from "next/link";
import GlossaryTerm from "../components/GlossaryTerm";

const questions: {
  question: ReactNode;
  options: { text: ReactNode; value: string }[];
  correctAnswer: string;
  rationale: ReactNode;
}[] = [
  {
    question: (
      <>
        In the phrase <span className="font-arabic">أَهْلٌ طَيِّبُونَ</span> (The
        people are good), what is the correct case ending for the word{" "}
        <span className="font-arabic">أَهْلٌ</span>?
      </>
    ),
    options: [
      {
        text: (
          <>
            <span className="font-arabic">ـُ</span>
          </>
        ),
        value: "damma",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـَ</span>
          </>
        ),
        value: "fatha",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـِ</span>
          </>
        ),
        value: "kasra",
      },
    ],
    correctAnswer: "damma",
    rationale: (
      <>
        Correct! The word <span className="font-arabic">أَهْلٌ</span> is the
        subject (<GlossaryTerm termKey="mubtada"><span className="font-arabic">مبتدأ</span></GlossaryTerm>).
        It is <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm> (<span className="font-arabic">ـُ</span>).
      </>
    ),
  },
  {
    question: (
      <>
        In the phrase <span className="font-arabic">رَأَيْتُ رَجُلاً</span> (I saw a
        man), what is the correct case ending for the word{" "}
        <span className="font-arabic">رَجُلاً</span>?
      </>
    ),
    options: [
      {
        text: (
          <>
            <span className="font-arabic">ـٌ</span>
          </>
        ),
        value: "dammatan",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـً</span>
          </>
        ),
        value: "fathatan",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـٍ</span>
          </>
        ),
        value: "kasratan",
      },
    ],
    correctAnswer: "fathatan",
    rationale: (
      <>
        Correct! The word <span className="font-arabic">رَجُلاً</span> is the
        object (<GlossaryTerm termKey="maful_bihi"><span className="font-arabic">مفعول به</span></GlossaryTerm>).
        It is <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm> (<span className="font-arabic">ـً</span>).
      </>
    ),
  },
  {
    question: (
      <>
        In the phrase <span className="font-arabic">فِي الْبَيْتِ</span> (in the
        house), what is the correct case ending for the word{" "}
        <span className="font-arabic">الْبَيْتِ</span>?
      </>
    ),
    options: [
      {
        text: (
          <>
            <span className="font-arabic">ـُ</span> 
          </>
        ),
        value: "damma",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـَ</span> 
          </>
        ),
        value: "fatha",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـِ</span> 
          </>
        ),
        value: "kasra",
      },
    ],
    correctAnswer: "kasra",
    rationale: (
      <>
        Correct! The word <span className="font-arabic">الْبَيْتِ</span> comes after
        <span className="font-arabic"> فِي</span>. It is
        <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm> (<span className="font-arabic">ـِ</span>).
      </>
    ),
  },
  {
    question: (
      <>
        In the phrase <span className="font-arabic">الطالِبُ مجتهدٌ</span>, which word
        is the <GlossaryTerm termKey="mubtada"><span className="font-arabic">مبتدأ</span></GlossaryTerm>?
      </>
    ),
    options: [
      {
        text: <span className="font-arabic">الطالِبُ</span>,
        value: "al-talibu",
      },
      {
        text: <span className="font-arabic">مجتهدٌ</span>,
        value: "mujtahidun",
      },
    ],
    correctAnswer: "al-talibu",
    rationale: (
      <>
        Correct. In a nominal sentence, the subject (
        <GlossaryTerm termKey="mubtada"><span className="font-arabic">مبتدأ</span></GlossaryTerm>) usually comes first.
      </>
    ),
  },
  {
    question: (
      <>
        The particle <span className="font-arabic">'إنَّ'</span> makes the noun that
        follows it...?
      </>
    ),
    options: [
      {
        text: (
          <>
            <GlossaryTerm termKey="marfu"><span className="font-arabic">مرفوع</span></GlossaryTerm>
          </>
        ),
        value: "marfu",
      },
      {
        text: (
          <>
            <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm>
          </>
        ),
        value: "mansub",
      },
      {
        text: (
          <>
            <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm>
          </>
        ),
        value: "majrur",
      },
    ],
    correctAnswer: "mansub",
    rationale: (
      <>
        Correct! <span className="font-arabic">'إنَّ'</span> makes the next noun
        <GlossaryTerm termKey="mansub"><span className="font-arabic">منصوب</span></GlossaryTerm>.
      </>
    ),
  },
];

export default function DiagnosticPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showNext, setShowNext] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    setFeedback(
      isCorrect
        ? questions[currentQuestionIndex].rationale
        : "That's not quite right. Try again!"
    );
    if (isCorrect) {
      setShowNext(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    setShowNext(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Fisher–Yates shuffle to randomize option order per question
  function shuffle<T>(array: T[]): T[] {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const shuffledOptions = useMemo(
    () => (currentQuestion ? shuffle(currentQuestion.options) : []),
    [currentQuestionIndex]
  );

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Diagnostic Test</h1>
        <p className="text-lg">
          This short test checks your level. After this, we suggest where to start.
        </p>

        {currentQuestionIndex < questions.length ? (
          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
            <p className="text-xl font-semibold mb-4">
              Question {currentQuestionIndex + 1}:
            </p>
            <div className="text-lg mb-4">{currentQuestion.question}</div>
            <div className="flex flex-col gap-4">
              {shuffledOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelection(option.value)}
                  className={`p-4 rounded-lg flex items-center justify-center text-center text-xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors ${
                    selectedAnswer === option.value
                      ? option.value === currentQuestion.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                  disabled={showNext}
                >
                  {option.text}
                </button>
              ))}
            </div>
            {feedback && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                    : "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100"
                }`}
              >
                <div>{feedback}</div>
              </div>
            )}
            {showNext && (
              <button
                onClick={handleNextQuestion}
                className="mt-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors"
              >
                Next Question
              </button>
            )}
          </div>
        ) : (
          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
            <p className="text-xl font-semibold">
              You have completed the diagnostic test!
            </p>
            <p className="text-lg mt-4">
              Based on your results, we recommend you start your journey in the
              Scholar's Courtyard.
            </p>
            <div className="mt-4 flex gap-4 flex-wrap justify-center">
              <Link href="/chapter1">
                <button className="rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors">
                  Proceed to Chapter 1
                </button>
              </Link>
              <Link href="/chapter2">
                <button className="rounded-full bg-green-600 text-white hover:bg-green-700 font-bold text-lg py-3 px-8 transition-colors">
                  Go to Courtyard (Chapter 2)
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
