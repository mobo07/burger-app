import Burger from "../components/burger/Burger";
import Navbar from "../components/Navbar";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-5 font-bold text-2xl">We hope it tastes great!</h1>
        <Burger />
      </div>
    </div>
  );
};

export default Checkout;
