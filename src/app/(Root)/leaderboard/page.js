import Header from "@/components/pages/leaderboard/Header";

const page = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 sm:py-24 py-20  px-4 `}
    >
      <div className="max-w-4xl mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default page;
