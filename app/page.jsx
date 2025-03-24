// import ContainerInfosMobile from "@/components/ContainerInfos/Mobile/ContainerInfosMobile";
import ContainerInfos from "@/components/ContainerInfos/ContainerInfos";
import Download from "@/components/Download/Download";
import Faqs from "@/components/Faqs/Faqs";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Headers from "@/components/Headers/Headers";
import Hero from "@/components/Hero/Hero";
import WhyTrackMyHome from "@/components/WhyTrackMyHome/WhyTrackMyHome";

export default function Home() {
  return (
    <>
      <Headers />
      <main>
        <Hero />
        <WhyTrackMyHome />
        <ContainerInfos />
        <Features />
        <Download />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
