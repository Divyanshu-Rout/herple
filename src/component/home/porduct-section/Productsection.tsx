import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiStar } from "react-icons/hi";

const Productsection = () => {
  const DummyProduct = () => {
    return (
      <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">$449</span>
              <span className="text-sm text-slate-900 line-through">$699</span>
            </p>
            <div className="flex items-center">
              <div className="text-yellow-400 flex">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </span>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <AiOutlineShoppingCart />
            Add to cart
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap ">
      {[1, 2, 3, 5, 6, 7].map((item) => {
        return <DummyProduct key={item} />;
      })}
    </div>
  );
};

export default Productsection;
