"use client";

import Link from "next/link";
import { useState, ReactNode, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import GlossaryTerm from "../../components/GlossaryTerm";

export default function PathIsmPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    try {
      const allowed = localStorage.getItem("ch2Complete") === "true";
      if (!allowed) router.replace("/chapter2");
    } catch {
      router.replace("/chapter2");
    }
  }, [router]);

  if (!mounted) return null;

  const [isIdafa, setIsIdafa] = useState<string | null>(null);
  const [isDefinite, setIsDefinite] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [showHint, setShowHint] = useState(false);

  const check = () => {
    const idafaCorrect = isIdafa === "yes";
    const definiteCorrect = isDefinite === "yes";

    if (idafaCorrect && definiteCorrect) {
      setFeedback(
        <>
          Correct. This is <GlossaryTerm termKey="idafa"><span className="font-arabic">إضافة</span></GlossaryTerm>.
          Second word is <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm>.
          Because it is <GlossaryTerm termKey="marifah"><span className="font-arabic">معرفة</span></GlossaryTerm>, the whole phrase is definite.
        </>
      );
    } else {
      setFeedback(
        <>
          Tip: In <GlossaryTerm termKey="idafa"><span className="font-arabic">إضافة</span></GlossaryTerm>, the second word is
          <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm>. If the second is
          <GlossaryTerm termKey="marifah"><span className="font-arabic">معرفة</span></GlossaryTerm>, the phrase is definite.
        </>
      );
    }
  };

  // Shuffle helper and memoized options to vary answer positions
  function shuffle<T>(array: T[]): T[] {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const idafaOptions = useMemo(
    () => shuffle([
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ]),
    []
  );

  const definiteOptions = useMemo(
    () => shuffle([
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ]),
    []
  );

  const isCorrect = isIdafa === "yes" && isDefinite === "yes";

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col gap-8 items-center text-center w-full max-w-xl sm:max-w-2xl">
        <h1 className="text-4xl font-bold heading-accent">Path of Noun</h1>
        <p className="text-lg"><span className="font-arabic">المعرفة والإضافة</span></p>

        <div className="themed-card p-6 md:p-8 w-full">
          <p className="text-xl font-semibold mb-4">Exercise</p>
          <div className="mb-2">
            <button
              onClick={() => setShowHint((v) => !v)}
              className="text-sm underline text-blue-700 dark:text-blue-400"
            >
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <div className="mt-2 text-left text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">
                In <GlossaryTerm termKey="idafa"><span className="font-arabic">إضافة</span></GlossaryTerm>, the second word is
                <GlossaryTerm termKey="majrur"><span className="font-arabic">مجرور</span></GlossaryTerm>. If the second is
                <GlossaryTerm termKey="marifah"><span className="font-arabic">معرفة</span></GlossaryTerm>, the whole phrase is definite.
              </div>
            )}
          </div>
          <div className="text-4xl font-arabic mb-4" dir="rtl">
            بَيْتُ الطَّالِبِ
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold mb-2">Is this an <GlossaryTerm termKey="idafa"><span className="font-arabic">إضافة</span></GlossaryTerm>?</p>
              <div className="flex flex-col gap-2">
                {idafaOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setIsIdafa(opt.value)}
                    className={`p-3 rounded-lg flex items-center justify-center text-center text-xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors transition-transform active:scale-[0.98] ${
                      isIdafa === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Is the whole phrase <GlossaryTerm termKey="marifah"><span className="font-arabic">معرفة</span></GlossaryTerm>?</p>
              <div className="flex flex-col gap-2">
                {definiteOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setIsDefinite(opt.value)}
                    className={`p-3 rounded-lg flex items-center justify-center text-center text-xl shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 transition-colors transition-transform active:scale-[0.98] ${
                      isDefinite === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={check} className="mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]" disabled={!isIdafa || !isDefinite}>
            Check Answer
          </button>

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 animate-correct' : 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 animate-wrong'} fade-in-up text-left`}>
              {feedback}
            </div>
          )}
        </div>

        <Link href="/chapter3">
          <button className="mt-4 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">Back to Garden</button>
        </Link>
      </main>
    </div>
  );
}
