import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  const MenuOptions = [
    {
      id: 1,
      title: "Home",
      link: "/",
      innerRoute: true,
    },
    {
      id: 2,
      title: "Blogs",
      link: "/blogs",
      innerRoute: true,
    },
    {
      id: 3,
      title: "Shop",
      link: "/shop",
      innerRoute: true,
    },
  ];

  return (
    <div className="w-full flex justify-center  py-4">
      <div className=" max-w-[1080px] w-full font-railway text-[22px] flex items-center justify-between text-gray-900">
        <div>Logo</div>
        <div className="grid grid-cols-3 gap-3 uppercase">
          {MenuOptions?.map((item) => {
            return (
              <button key={item?.id} onClick={() => navigation(item?.link)}>
                <p>{item?.title}</p>
              </button>
            );
          })}
        </div>
        <div className="flex items-center text-gray-800">
          <CgProfile size={30} /> <p className="ml-2">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
