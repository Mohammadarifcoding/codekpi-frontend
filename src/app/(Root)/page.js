import Core from "@/components/pages/Home/Core/Core";
import About from "@/components/pages/Home/About/About";
import Banner from "@/components/pages/Home/Banner/Banner";
import Footer from "@/components/shared/footer/Footer";
import Reviews from "@/components/pages/Home/Reviews/Reviews";
import AiWorkshopBanner from "@/components/pages/ai-workshop/AiWorkshopBanner";

export default function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <AiWorkshopBanner />
      <About />
      <Core />
      <Reviews />
      <Footer />
    </div>
  );
}
