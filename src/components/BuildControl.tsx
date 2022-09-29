import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addIngredient, removeIngredient } from "../redux/ingredientsSlice";

interface Props {
  type: string;
}

const BuildControl = ({ type }: Props) => {
  const { ingredients } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between w-full text-white font-semibold my-3">
      <p className="font-bold text-black">
        {type[0].toUpperCase() + type.slice(1)}
      </p>
      <div className="">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-[5px] mx-1 w-[80px] bg-[#d39952] border border-[#AA6817] cursor-pointer outline-none disabled:bg-[#ac9980] disabled:text-[#ccc] disabled:cursor-not-allowed disabled:hover:cursor-not-allowed"
          onClick={() => dispatch(removeIngredient(type))}
          disabled={!ingredients.some((el) => el === type)}
        >
          Less
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-[5px] mx-1 w-[80px] bg-[#8f5e1e] border border-[#AA6817] cursor-pointer outline-none"
          onClick={() => dispatch(addIngredient(type))}
        >
          More
        </motion.button>
      </div>
    </div>
  );
};

export default BuildControl;
