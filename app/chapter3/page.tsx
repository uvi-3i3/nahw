"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Chapter3Page() {
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

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="flex flex-col gap-8 items-center text-center w-full max-w-5xl">
        <h1 className="text-4xl font-bold heading-accent">Chapter 3: The Garden of Wisdom</h1>
        <p className="text-lg">A quiet garden opens with three paths before you. Choose your path.</p>

        <div className="grid md:grid-cols-3 gap-8 w-full mt-6">
          <Link href="/chapter3/ism">
            <div className="themed-card p-6 md:p-8 h-full flex flex-col justify-between cursor-pointer transition-transform hover:shadow-md active:scale-[0.98]">
              <div>
                <h2 className="text-2xl font-bold mb-2">Path of Noun</h2>
                <p><span className="font-arabic">المعرفة والإضافة</span> وتأثير المعنى في الإعراب.</p>
              </div>
              <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center shadow-sm active:scale-[0.98]">
                Enter
              </button>
            </div>
          </Link>

          <Link href="/chapter3/harf">
            <div className="themed-card p-6 md:p-8 h-full flex flex-col justify-between cursor-pointer transition-transform hover:shadow-md active:scale-[0.98]">
              <div>
                <h2 className="text-2xl font-bold mb-2">Path of Particle</h2>
                <p><span className="font-arabic">الحروف</span> و<span className="font-arabic">حروف الجر</span> وحكم الإعراب.</p>
              </div>
              <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center shadow-sm active:scale-[0.98]">
                Enter
              </button>
            </div>
          </Link>

          <Link href="/chapter3/fil">
            <div className="themed-card p-6 md:p-8 h-full flex flex-col justify-between cursor-pointer transition-transform hover:shadow-md active:scale-[0.98]">
              <div>
                <h2 className="text-2xl font-bold mb-2">Path of Verb</h2>
                <p><span className="font-arabic">الأفعال</span>، الجذور الثلاثية، والأوزان.</p>
              </div>
              <button className="mt-4 rounded-full bg-blue-600 text-white font-bold text-lg py-2 px-6 self-center shadow-sm active:scale-[0.98]">
                Enter
              </button>
            </div>
          </Link>
        </div>

        <Link href="/chapter2">
          <button className="mt-8 rounded-full bg-gray-500 text-white hover:bg-gray-600 font-bold text-lg py-3 px-8 transition-colors shadow-sm active:scale-[0.98]">
            Back to Courtyard
          </button>
        </Link>
      </main>
    </div>
  );
}
