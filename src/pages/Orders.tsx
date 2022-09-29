import Navbar from "../components/Navbar";
import { useAppSelector } from "../redux/hooks";

const Orders = () => {
  const { orders } = useAppSelector((state) => state);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        {/* Order */}
        {orders.length < 1 ? (
          <p className="my-5 text-xl font-semibold">
            You do not have any orders yet.
          </p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="w-[85%] bg-white py-5 px-3 my-2 rounded-sm shadow-md md:w-[70%] md:max-w-[940px] md:my-4"
            >
              {/* Ingredients */}
              <p className="my-1 md:my-3">
                Ingredients:{" "}
                <span className="px-2 py-1 inline-block border border-[#dfdede] bg-white m-2">
                  {order.bacon.name} ({order.bacon.quantity})
                </span>
                <span className="px-2 py-1 inline-block border border-[#dfdede] bg-white m-2">
                  {order.meat.name} ({order.meat.quantity})
                </span>
                <span className="px-2 py-1 inline-block border border-[#dfdede] bg-white m-2">
                  {order.salad.name} ({order.salad.quantity})
                </span>
                <span className="px-2 py-1 inline-block border border-[#dfdede] bg-white m-2">
                  {order.cheese.name} ({order.cheese.quantity})
                </span>
              </p>
              {/* Price */}
              <p className="my-3">
                Price:{" "}
                <span className="font-bold">${order.price.toFixed(2)}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
