"use client";
import { useEffect, useRef, useState } from "react";
import CustomButton from "@/components/shared/Button/CustomButton";
import HeadingBadge from "@/components/shared/Heading/HeadingBadge";
import { CircleCheckBig, Facebook, ArrowRight } from "lucide-react";
import Link from "next/link";

// ====== CONFIG ======
const FB_GROUP_URL = "https://www.facebook.com/groups/492270543981327";
const FB_PAGE_URL = "https://www.facebook.com/Codekpi";
const AUTO_OPEN_SECONDS = 7; // visible countdown (can cancel)

const SuccessPage = ({ searchParams }) => {
  const { studentName, studentId } = searchParams || {};
  const [secondsLeft, setSecondsLeft] = useState(AUTO_OPEN_SECONDS); // AUTO_OPEN_SECONDS;
  const [autoOpen, setAutoOpen] = useState(true);
  const openedRef = useRef(false);

  // Accessible focus for the “Step 2” section
  const stepRef = useRef(null);
  useEffect(() => {
    stepRef.current?.focus();
  }, []);

  // Start countdown + open (unless canceled)
  useEffect(() => {
    if (!autoOpen || openedRef.current) return;

    const tick = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    const openTimer = setTimeout(() => {
      if (!openedRef.current) {
        openedRef.current = true;
        window.location.href = FB_GROUP_URL; // open same tab (consistent with intent)
      }
    }, AUTO_OPEN_SECONDS * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(openTimer);
    };
  }, [autoOpen]);

  const cancelAuto = () => {
    if (!autoOpen) return;
    setAutoOpen(false);
  };

  const handleJoin = (source) => {
    openedRef.current = true; // stop auto-open if user already clicked
    onJoinClick(source);
    window.open(FB_GROUP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
      aria-labelledby="banner-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen sm:pt-36 pt-20">
        <div className="w-full px-4 sm:pb-28 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl flex justify-center items-center">
            <div className="flex flex-col items-center text-center">
              {/* Success badge */}
              <HeadingBadge type="green">
                <div>
                  <CircleCheckBig className="h-4 w-4" />
                </div>
                <span id="banner-heading">Welcome to the AI Workshop!</span>
              </HeadingBadge>

              {/* Title */}
              <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mt-3">
                Your Workshop{" "}
                <span className="text-orange-500">Registration Completed</span>
              </h1>

              {/* Copy */}
              <p className="sm:text-lg text-gray-600 mt-3 max-w-2xl">
                {studentName ? (
                  <span className="text-orange-500">Dear {studentName}, </span>
                ) : null}
                You&apos;re all set!{" "}
                {studentId ? (
                  <span className="text-green-700 font-semibold">
                    Your Student ID is{" "}
                    <span className="text-orange-500">{studentId}</span>.
                  </span>
                ) : null}{" "}
                We&apos;ll email details soon.
              </p>

              {/* STEP 2 block */}
              <div
                ref={stepRef}
                tabIndex={-1}
                aria-live="polite"
                className="mt-8 w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5 text-left shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                    Step 2: Join the{" "}
                    <span className="text-[#1877F2]">
                      private Facebook group
                    </span>
                  </h2>
                  {autoOpen ? (
                    <span className="text-xs sm:text-sm text-slate-500">
                      Auto-opening in {secondsLeft}s…
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm text-slate-500">
                      Auto-open canceled
                    </span>
                  )}
                </div>

                <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700 text-sm sm:text-base">
                  <li>Get bonus materials & weekly tips</li>
                  <li>Ask questions and get peer support</li>
                  <li>Live announcements & mentor Q&amp;A</li>
                </ul>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <CustomButton
                    type="primary"
                    className="h-11 px-5 w-full sm:w-auto"
                    onClick={() => handleJoin("button")}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Facebook className="h-5 w-5" />
                      Join Facebook Group
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </CustomButton>

                  {autoOpen ? (
                    <button
                      type="button"
                      onClick={cancelAuto}
                      className="h-11 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto"
                    >
                      Cancel Auto-Open
                    </button>
                  ) : (
                    <Link
                      href={FB_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition flex items-center justify-center w-full sm:w-auto"
                    >
                      Follow our Page
                    </Link>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-500">
                  Prefer email only? No worries — we’ll still send important
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 sm:hidden backdrop-blur bg-white/80 border-t border-slate-200 z-20 p-3">
          <CustomButton
            type="primary"
            className="h-12 w-full"
            onClick={() => handleJoin("sticky")}
          >
            <span className="inline-flex items-center gap-2">
              <Facebook className="h-5 w-5" />
              Join the Facebook Group
            </span>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
