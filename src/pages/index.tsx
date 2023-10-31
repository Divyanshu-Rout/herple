import HeroSection from "../component/home/hero-section/HeroSection";
import HeroImage from "../assets/home/homeplant.png";
import Productsection from "../component/home/porduct-section/Productsection";
import FancyWords from "../component/home/fancy-words/FancyWords";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center  py-4 bg-green-5">
      <div className="max-w-[1080px] w-full font-railway text-[22px] flex flex-col items-center text-teal-800">
        <HeroSection />
        <Productsection />
        <FancyWords imagePosition="left" />
        <FancyWords imagePosition="right" />
      </div>
      <img src={HeroImage} alt="" className="absolute right-0 top-0" />
    </div>
  );
};

export default Home;
