import FlowerImage from "../../../assets/home/sectionImage1.png";
import FlowerImage2 from "../../../assets/home/flower2.png";

interface IFancywords {
  imagePosition: "left" | "right";
}

const FancyWords = ({ imagePosition }: IFancywords) => {
  return (
    <div className="min-h-screen ">
      {imagePosition === "left" && (
        <div className="flex items-center justify-between w-full">
          <img src={FlowerImage} alt="" className="w-1/2" />
          <p className="w-4/6 text-[34px] ">
            In the fast-paced realm of online retail, we've carved out a niche
            that's both unique and customer-centric. Here, you'll discover a
            carefully curated selection of products that cater to your diverse
            desires. From the latest fashion trends to cutting-edge tech
            gadgets, home essentials to unique novelties, our virtual aisles are
            stocked with quality items that suit your every need.
          </p>
        </div>
      )}

      {imagePosition === "right" && (
        <div className="flex items-center justify-between w-full">
          <p className="w-4/6 text-[34px] ">
            Navigating our platform is designed to be intuitive, ensuring that
            your shopping experience is seamless and secure. With secure payment
            options and a responsive customer support team, we prioritize your
            satisfaction and peace of mind.
          </p>
          <img src={FlowerImage2} alt="" className="w-1/2" />
        </div>
      )}
    </div>
  );
};

export default FancyWords;
