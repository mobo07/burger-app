import "./burger.css";
import Ingredient from "../Ingredient";

const Burger = () => {
  return (
    // Wrapper Div
    <div className="w-full h-[300px] mt-5 overflow-y-auto md:h-[350px]">
      <div className=" flex flex-col items-center mt-5 w-[65%] max-w-xs mx-auto">
        {/* Top bun */}
        <div className="relative w-full max-w-xs h-16 my-1 bg-gradient-to-b from-[#bc581e] to-[#e27b36] rounded-t-full shadow-[inset_-15px_0_#c15711] md:max-w-sm md:min-h-[90px]">
          {/* Seeds */}
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
        <Ingredient type="meat" />
        <Ingredient type="cheese" />
        <Ingredient type="bacon" />
        <Ingredient type="salad" />
        {/* How would you like your burger? */}
        {/* Bottom bun */}
        <div
          className="relative w-full max-w-xs h-11 my-1 bg-gradient-to-b from-[#bc581e] to-[#e27b36]
      rounded-b-3xl shadow-[inset_-15px_0_#c15711] md:max-w-sm md:min-h-[45px]"
        ></div>
      </div>
    </div>
  );
};

export default Burger;
