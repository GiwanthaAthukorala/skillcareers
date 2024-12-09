import { Career } from "@/components/Career";
import CategoriesSection from "@/components/Categorie";
import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import News from "@/components/News";
import QuestionPage from "@/components/Question";
import Recruiterslide from "@/components/Recruiter";
import Stories from "@/components/Stories";
import Footer from "@/context/Footer";

export default function Home() {
  return (
    <>
      <title>Home</title>

      <div>
        <div>
          <div>
            <HomeHeadr />
          </div>
          <div>
            <Career />
          </div>

          <div>
            <CategoriesSection />
          </div>
          <div>
            <Recruiterslide />
          </div>

          <div>
            <Stories />
          </div>
          <div>
            <News />
          </div>
          <div>
            <QuestionPage />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
