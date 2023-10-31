import { useEffect, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  //dummy state
  const isLoggedIn = true;

  //for getting pathname
  const { pathname } = useLocation();

  //state for animating slider on menu bar
  const [marginLeft, setMarginLeft] = useState<number>(0);

  useEffect(() => {
    if (pathname === "/") {
      setMarginLeft(0);
    } else if (pathname === "/blogs") {
      setMarginLeft(100);
    } else if (pathname === "/shop") {
      setMarginLeft(200);
    } else {
      setMarginLeft(300);
    }
  }, [pathname]);

  const MenuOptions = [
    {
      id: 1,
      title: "Home",
      link: "/",
      marginLeft: 0,
      innerRoute: true,
    },
    {
      id: 2,
      title: "Blogs",
      link: "/blogs",
      marginLeft: 100,
      innerRoute: true,
    },
    {
      id: 3,
      title: "Shop",
      link: "/shop",
      marginLeft: 200,
      innerRoute: true,
    },
  ];

  return (
    <div className="w-full flex justify-center  py-4 bg-green-5">
      <div className="max-w-[1080px] w-full font-railway text-[22px] flex items-center justify-between text-teal-800">
        <div>HERPLE</div>
        <div className="w-[300px] overflow-hidden">
          <div className="flex">
            {MenuOptions?.map((item) => {
              return (
                <button
                  className="text-[18px] w-[100px]"
                  key={item?.id}
                  onClick={() => {
                    navigate(item?.link);
                    setMarginLeft(item?.marginLeft);
                  }}
                >
                  <p>{item?.title}</p>
                </button>
              );
            })}
          </div>
          <div className="w-full h-[5px] mt-1">
            <div
              className="w-[100px] h-[5px] rounded-[5px] bg-teal-800 transform duration-300 "
              style={{
                marginLeft: marginLeft,
              }}
            ></div>
          </div>
        </div>

        <button
          className="flex items-center z-10 bg-teal-800/70 text-white py-2 px-6 rounded-full hover:scale-105"
          onClick={() => navigate("/auth")}
        >
          <HiOutlineUserCircle size={30} />{" "}
          <p className="ml-2">{isLoggedIn ? "Logout" : "Login"}</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
