import { HiHeart } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full flex justify-center  py-4 bg-green-5">
      <div className="max-w-[1080px] w-full font-railway text-[22px] flex items-center justify-center text-teal-800">
        <HiHeart /> <p> For a project </p>
      </div>
    </div>
  );
};

export default Footer;
