import { motion } from "framer-motion";

interface Props {
  type: string;
}

const Ingredient = ({ type }: Props) => {
  switch (type) {
    case "meat":
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="my-1 w-[100%] max-w-xs h-[20px] rounded-2xl bg-gradient-to-b from-[#7f3608] to-[#702e05] md:max-w-sm"
        ></motion.div>
      );
    case "cheese":
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="my-1 w-[115%] max-w-[22rem] h-[10px] rounded-[20px] bg-gradient-to-b from-[#f4d004] to-[#d6bb22] md:max-w-[26rem]"
        ></motion.div>
      );
    case "bacon":
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="my-1 w-[100%] max-w-xs h-[8px] bg-gradient-to-b from-[#bf3813] to-[#c45e38] md:max-w-sm"
        ></motion.div>
      );
    case "salad":
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="my-1 w-[110%] max-w-[21rem] h-[15px] bg-gradient-to-b from-[#228c1d] to-[#91ce50] rounded-[20px] md:max-w-[25rem]"
        ></motion.div>
      );
    default:
      return <p>How would you like your burger?</p>;
  }
};

export default Ingredient;
