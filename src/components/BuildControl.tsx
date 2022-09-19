import { motion } from "framer-motion";

const BuildControl = () => {
  return (
    <div className="flex items-center text-white font-semibold my-3">
      <p className="font-bold mr-5 text-black">Meat</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="p-[5px] mx-1 w-[80px] bg-[#d39952] border border-[#AA6817] cursor-pointer outline-none disabled:bg-[#ac9980] disabled:text-[#ccc] disabled:cursor-not-allowed disabled:hover:cursor-not-allowed"
        disabled
      >
        Less
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="p-[5px] mx-1 w-[80px] bg-[#8f5e1e] border border-[#AA6817] cursor-pointer outline-none"
      >
        More
      </motion.button>
    </div>
  );
};

export default BuildControl;
