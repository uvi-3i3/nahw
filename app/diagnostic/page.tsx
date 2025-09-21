"use client";

import { useState, ReactNode } from "react";
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
            <span className="font-arabic">ـُ</span> (Damma)
          </>
        ),
        value: "damma",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـَ</span> (Fatha)
          </>
        ),
        value: "fatha",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـِ</span> (Kasra)
          </>
        ),
        value: "kasra",
      },
    ],
    correctAnswer: "damma",
    rationale: (
      <>
        Correct! The word <span className="font-arabic">أَهْلٌ</span> is the
        subject (<GlossaryTerm termKey="mubtada">mubtada'</GlossaryTerm>).
        It is <GlossaryTerm termKey="marfu">marfūʿ</GlossaryTerm> (damma).
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
            <span className="font-arabic">ـٌ</span> (Dammatan)
          </>
        ),
        value: "dammatan",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـً</span> (Fathatan)
          </>
        ),
        value: "fathatan",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـٍ</span> (Kasratan)
          </>
        ),
        value: "kasratan",
      },
    ],
    correctAnswer: "fathatan",
    rationale: (
      <>
        Correct! The word <span className="font-arabic">رَجُلاً</span> is the
        object (<GlossaryTerm termKey="maful_bihi">maf'ūl bihi</GlossaryTerm>).
        It is <GlossaryTerm termKey="mansub">manṣūb</GlossaryTerm> (fathatan).
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
            <span className="font-arabic">ـُ</span> (Damma)
          </>
        ),
        value: "damma",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـَ</span> (Fatha)
          </>
        ),
        value: "fatha",
      },
      {
        text: (
          <>
            <span className="font-arabic">ـِ</span> (Kasra)
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
        <GlossaryTerm termKey="majrur">majrūr</GlossaryTerm> (kasra).
      </>
    ),
  },
  {
    question: (
      <>
        In the phrase <span className="font-arabic">الطالِبُ مجتهدٌ</span>, which word
        is the <GlossaryTerm termKey="mubtada">مبتدأ (subject)</GlossaryTerm>?
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
        <GlossaryTerm termKey="mubtada">mubtada'</GlossaryTerm>) usually comes first.
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
            <GlossaryTerm termKey="marfu">مرفوع (marfūʿ)</GlossaryTerm>
          </>
        ),
        value: "marfu",
      },
      {
        text: (
          <>
            <GlossaryTerm termKey="mansub">منصوب (manṣūb)</GlossaryTerm>
          </>
        ),
        value: "mansub",
      },
      {
        text: (
          <>
            <GlossaryTerm termKey="majrur">مجرور (majrūr)</GlossaryTerm>
          </>
        ),
        value: "majrur",
      },
    ],
    correctAnswer: "mansub",
    rationale: (
      <>
        Correct! <span className="font-arabic">'إنَّ'</span> makes the next noun
        <GlossaryTerm termKey="mansub">manṣūب</GlossaryTerm>.
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

  const currentQuestion = questions[currentQuestionIndex];

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
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelection(option.value)}
                  className={`p-4 rounded-lg text-left transition-colors ${
                    selectedAnswer === option.value
                      ? option.value === currentQuestion.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                  disabled={selectedAnswer !== null}
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
