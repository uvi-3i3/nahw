"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";

export default function PathFilPage() {
  const [root, setRoot] = useState<string | null>(null);
  const [form, setForm] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);

  const check = () => {
    const rootCorrect = root === "ghfr"; // غ-ف-ر
    const formCorrect = form === "x"; // Form X (استفعل)

    if (rootCorrect && formCorrect) {
      setFeedback(
        <>
          Correct. Root: غ–ف–ر. Form: X (اسْتَفْعَلَ). Meaning: to seek forgiveness.
        </>
      );
    } else {
      setFeedback(
        <>
          Tip: Use pattern <span className="font-arabic">اسْتَفْعَلَ</span>. Remove added letters to find the root.
        </>
      );
    }
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Path of Fi‘l</h1>
        <p className="text-lg">Roots and forms</p>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <p className="text-lg mb-2">Analyze the verb:</p>
          <div className="text-3xl font-arabic mb-4" dir="rtl">اسْتَغْفَرَ</div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">Select the triliteral root:</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setRoot("ghfr")} className={`p-2 rounded ${root === "ghfr" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>غ ف ر</button>
                <button onClick={() => setRoot("slm")} className={`p-2 rounded ${root === "slm" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>س ل م</button>
                <button onClick={() => setRoot("ktb")} className={`p-2 rounded ${root === "ktb" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>ك ت ب</button>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Select the derived form (wazn):</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setForm("i")} className={`p-2 rounded ${form === "i" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Form I (فَعَلَ)</button>
                <button onClick={() => setForm("ii")} className={`p-2 rounded ${form === "ii" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Form II (فَعَّلَ)</button>
                <button onClick={() => setForm("x")} className={`p-2 rounded ${form === "x" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}>Form X (اسْتَفْعَلَ)</button>
              </div>
            </div>
          </div>

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors" disabled={!root || !form}>
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
