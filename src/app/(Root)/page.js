import Core from "@/components/pages/Core/Core";
import About from "@/components/pages/Home/About/About";
import Banner from "@/components/pages/Home/Banner/Banner";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <div>
      {/* <Banner/>
    <Course/>
    <Stats/>
    <WhyBest/>
    <Reviews/>
      <VideoReviews/>

    <Faq/> */}
      <Banner />
      <About/>
      <Core/>
      <Footer />
    </div>
  );
}
