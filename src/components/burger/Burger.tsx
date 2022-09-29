import "./burger.css";
import Ingredient from "../Ingredient";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { reset } from "../../redux/ingredientsSlice";
import { motion } from "framer-motion";

const Burger = () => {
  const { ingredients, price } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

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
        {!ingredients.length ? (
          <p className="my-2 text-sm font-semibold text-center md:text-base">
            How would you like your burger?
          </p>
        ) : (
          ingredients.map((ingredient, index) => (
            <Ingredient
              type={ingredient}
              key={`${ingredient}${price}${index}`}
            />
          ))
        )}
        {/* Bottom bun */}
        <div
          className="relative w-full max-w-xs h-11 my-1 bg-gradient-to-b from-[#bc581e] to-[#e27b36]
      rounded-b-3xl shadow-[inset_-15px_0_#c15711] md:max-w-sm md:min-h-[55px]"
        ></div>
      </div>
      {ingredients.length > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          whileHover={{ scale: 1.1 }}
          onClick={() => dispatch(reset())}
          className="block mx-auto mt-10 py-1 px-2 rounded-md bg-[#b86212] text-white text-sm tracking-wider font-semibold shadow-lg"
        >
          reset
        </motion.button>
      )}
    </div>
  );
};

export default Burger;
