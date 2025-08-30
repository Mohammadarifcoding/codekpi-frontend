import WorkshopForm from "@/components/pages/ai-workshop/WorkshopForm";
import FloatingTechIcons from "@/components/shared/FloatingTechIcons/FloatingTechIcons";
import HeadingBadge from "@/components/shared/Heading/HeadingBadge";
import { Bot, Code } from "lucide-react";

const Join = async () => {
  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50`}
      aria-labelledby="banner-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Primary gradient orbs */}

        {/* Programming-themed background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Code-like mesh pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>
      <FloatingTechIcons />
      <div className="relative z-10 flex min-h-screen sm:pt-36 pt-20">
        <div className="w-full px-4 sm:pb-20 pb-4   sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl flex justify-center items-center">
            <div className="flex flex-col items-center text-center">
              <HeadingBadge>
                <div>
                  <Bot className="h-4 w-4" />
                </div>

                <span>AI Workshop Registration</span>
              </HeadingBadge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join Our <span className="text-orange-500">AI Workshop</span>
              </h1>
              <p className="sm:text-lg  text-gray-600 ">
                Register now to secure your spot in our comprehensive Advance AI
                workshop
              </p>
              <WorkshopForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
