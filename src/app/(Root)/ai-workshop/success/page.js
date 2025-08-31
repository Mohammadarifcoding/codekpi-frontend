import CustomButton from "@/components/shared/Button/CustomButton";
import FloatingTechIcons from "@/components/shared/FloatingTechIcons/FloatingTechIcons";
import HeadingBadge from "@/components/shared/Heading/HeadingBadge";
import {
  ArrowRight,
  Bot,
  CircleCheckBig,
  Code,
  Facebook,
  Home,
} from "lucide-react";
import Link from "next/link";

const SuccessPage = ({ searchParams }) => {
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
      {/* <FloatingTechIcons /> */}
      <div className="relative z-10 flex min-h-screen sm:pt-36 pt-20">
        <div className="w-full px-4 sm:pb-20 pb-4   sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl flex justify-center items-center">
            <div className="flex flex-col items-center text-center ">
              <HeadingBadge type="green">
                <div>
                  <CircleCheckBig className="h-4 w-4" />
                </div>

                <span>Welcome to the AI Workshop!</span>
              </HeadingBadge>
              <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-4">
                Your Workshop{" "}
                <span className="text-orange-500">Registration Completed</span>
              </h1>
              <p className="sm:text-lg  text-gray-600 ">
                <span className="text-orange-500">
                  {" "}
                  Dear {searchParams.studentName},
                </span>{" "}
                Your AI workshop registration completed and{" "}
                <span className="text-green-700 font-semibold">
                  Student ID is {searchParams.studentId}
                </span>
                . You&apos;ll receive an email with more details. You must join
                the{" "}
                <Link
                  href={"https://www.facebook.com/groups/492270543981327"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-orange-500">Facebook group</span>
                </Link>{" "}
                and follow{" "}
                <Link
                  href={"https://www.facebook.com/Codekpi"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-orange-500">Our Page</span>
                </Link>{" "}
                to get the updates
              </p>
              <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row mt-10">
                <Link
                  href={"https://www.facebook.com/groups/492270543981327"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    type="primary"
                    className="h-10 md:h-12 px-4 md:px-8 text-sm md:text-base w-full "
                    // icon={<Facebook className="h-5 w-5" />}
                  >
                    Join Facebook Group
                  </CustomButton>
                </Link>

                <Link href={"https://www.facebook.com/Codekpi"} target="_blank">
                  <CustomButton
                    type="secondary"
                    className="h-10 md:h-12 px-4 md:px-8 text-sm md:text-base"
                  >
                    Visit our page
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
//   <Suspense
//       fallback={
// <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50/30 flex items-center justify-center">
//   <div className="text-center">
//     <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
//     <p className="text-gray-600">Loading success page...</p>
//   </div>
// </div>
//       }
//     >
//       <SuccessPageContent />
//     </Suspense>
