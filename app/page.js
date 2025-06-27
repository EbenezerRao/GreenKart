import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import OurMission from "./componets/OurMission";
import SectionDivider from "./componets/SectionDivider";
import ExploreProducts from "./componets/ExploreProducts";
import TrendingProducts from "./componets/TrendingProducts";
import NewsLetter from "./componets/NewsLetter";
import Footer from "./componets/Footer";
import CopyRight from "./componets/CopyRight";
export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Navbar />
      <HeroSection />
      <SectionDivider/>
      <OurMission/> 
      <SectionDivider/>
      <ExploreProducts/>
      <SectionDivider/>
      <TrendingProducts/>
      <SectionDivider/>
      <NewsLetter/>
      <SectionDivider/>
      <Footer/>
      <SectionDivider/>
      <CopyRight/>
    </div>
  );
}
