import HomeAbout from "@/components/AboutUs/HomeAbout";
import SustainabilitySection from "@/components/AboutUs/SustainabilitySection";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import Footer from "@/context/Footer";

export default function AboutUs() {
  return (
    <>
      <title>About Us</title>
      <div>
        <div>
          <HomeHeadr />
        </div>
        <div>
          <HomeAbout />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <di>
          <SustainabilitySection />
        </di>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
