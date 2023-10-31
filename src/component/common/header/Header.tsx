import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  //dummy state
  const isLoggedIn = true;

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
    <div className="w-full flex justify-center  py-4 bg-green-5">
      <div className="max-w-[1080px] w-full font-railway text-[22px] flex items-center justify-between text-teal-800">
        <div>HERPLE</div>
        <div>
          <div className="flex">
            {MenuOptions?.map((item) => {
              return (
                <button
                  className="text-[18px] w-[100px]"
                  key={item?.id}
                  onClick={() => navigate(item?.link)}
                >
                  <p>{item?.title}</p>
                </button>
              );
            })}
          </div>
          <div className="w-full h-[5px]">
            <div
              className="w-[100px] h-[5px] rounded-b-[5px] bg-teal-800 duration-300 "
              style={{
                marginLeft: 0,
              }}
            ></div>
          </div>
        </div>

        <button className="flex items-center" onClick={() => navigate("/auth")}>
          <HiOutlineUserCircle size={30} />{" "}
          <p className="ml-2">{isLoggedIn ? "Logout" : "Login"}</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
