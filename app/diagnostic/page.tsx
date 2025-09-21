"use client";

import { useState } from 'react';
import Link from "next/link";

// Helper function to wrap Arabic text with a span for styling
const formatArabicText = (text: string) => {
  // Regular expression to match Arabic characters
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g;
  return text.replace(arabicRegex, (match) => `<span class="font-arabic">${match}</span>`);
};

const questions = [
  {
    question: "In the phrase أَهْلٌ طَيِّبُونَ (The people are good), what is the correct case ending for the word أَهْلٌ?",
    options: [
      { text: "ـُ (Damma)", value: "damma" },
      { text: "ـَ (Fatha)", value: "fatha" },
      { text: "ـِ (Kasra)", value: "kasra" },
    ],
    correctAnswer: "damma",
    rationale: "Correct! The word أَهْلٌ is the subject (mubtada') of a nominal sentence, so it is in the nominative case (marfū'), which is indicated by the damma.",
  },
  {
    question: "In the phrase رَأَيْتُ رَجُلاً (I saw a man), what is the correct case ending for the word رَجُلاً?",
    options: [
        { text: "ـٌ (Dammatan)", value: "dammatan" },
        { text: "ـً (Fathatan)", value: "fathatan" },
        { text: "ـٍ (Kasratan)", value: "kasratan" },
    ],
    correctAnswer: "fathatan",
    rationale: "Excellent! The word رَجُلاً is the direct object (maf'ūl bihi) of the verb رَأَيْتُ, so it is in the accusative case (manṣūb), indicated by fathatan.",
  },
  {
    question: "In the phrase فِي الْبَيْتِ (in the house), what is the correct case ending for the word الْبَيْتِ?",
    options: [
        { text: "ـُ (Damma)", value: "damma" },
        { text: "ـَ (Fatha)", value: "fatha" },
        { text: "ـِ (Kasra)", value: "kasra" },
    ],
    correctAnswer: "kasra",
    rationale: "Well done! The word الْبَيْتِ is preceded by the preposition فِي, so it is in the genitive case (majrūr), which is indicated by the kasra.",
  },
  {
    question: "In the phrase الطالِبُ مجتهدٌ, which word is the مبتدأ (subject)?",
    options: [
        { text: "الطالِبُ", value: "al-talibu" },
        { text: "مجتهدٌ", value: "mujtahidun" },
    ],
    correctAnswer: "al-talibu",
    rationale: "Correct. In a nominal sentence (جملة اسمية), the subject (مبتدأ) typically comes first and is definite, while the predicate (خبر) follows and is often indefinite.",
  },
  {
    question: "The particle 'إنَّ' makes the noun that follows it...?",
    options: [
        { text: "مرفوع (marfūʿ)", value: "marfu" },
        { text: "منصوب (manṣūb)", value: "mansub" },
        { text: "مجرور (majrūr)", value: "majrur" },
    ],
    correctAnswer: "mansub",
    rationale: "Exactly! Particles like 'إنَّ' and its sisters (أخوات إن) are نصب particles, meaning they put the noun immediately following them into the accusative (منصوب) case.",
  },
];

export default function DiagnosticPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showNext, setShowNext] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    setFeedback(isCorrect ? questions[currentQuestionIndex].rationale : "That's not quite right. Try again!");
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
        <p className="text-lg">This short test will help us understand your current knowledge of Arabic grammar and recommend a starting point for your journey in the City of Language.</p>
        
        {currentQuestionIndex < questions.length ? (
          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
            <p className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 1}:</p>
            <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: formatArabicText(currentQuestion.question) }}></p>
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelection(option.value)}
                  className={`p-4 rounded-lg text-left transition-colors ${
                    selectedAnswer === option.value
                      ? option.value === currentQuestion.correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  disabled={selectedAnswer !== null}
                  dangerouslySetInnerHTML={{ __html: formatArabicText(option.text) }}
                >
                </button>
              ))}
            </div>
            {feedback && (
              <div className={`mt-4 p-4 rounded-lg ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100' : 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100'}`}>
                <p dangerouslySetInnerHTML={{ __html: formatArabicText(feedback) }}></p>
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
            <p className="text-xl font-semibold">You have completed the diagnostic test!</p>
            <p className="text-lg mt-4">Based on your results, we recommend you start your journey in the Scholar's Courtyard.</p>
            <Link href="/chapter1">
              <button className="mt-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors">
                Proceed to Chapter 1
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
