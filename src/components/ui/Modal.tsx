import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { newOrder } from "../../redux/ingredientsSlice";

interface Props {
  showModal: () => void;
}

const Modal = ({ showModal }: Props) => {
  const { ingredients, price } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(newOrder());
    navigate("checkout");
  };

  return (
    <>
      <Backdrop toggle={showModal} />
      <motion.div
        initial={{ top: "-100vh" }}
        animate={{ top: "50%" }}
        exit={{ top: "-100vh" }}
        className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 bg-white w-[95%] max-w-[400px] p-4 my-4 md:w-[50%] md:max-w-[576px]"
      >
        <h3 className="font-semibold text-base my-2 md:text-2xl md:my-3">
          Your Order
        </h3>
        <p className="my-2 text-sm md:text-base">
          A delicious burger with the following ingredients:
        </p>
        <ul className="list-inside list-disc text-sm md:text-base">
          <li>
            meat:{" "}
            <span>{ingredients.filter((el) => el === "meat").length}</span>
          </li>
          <li>
            cheese:{" "}
            <span>{ingredients.filter((el) => el === "cheese").length}</span>
          </li>
          <li>
            bacon:{" "}
            <span>{ingredients.filter((el) => el === "bacon").length}</span>
          </li>
          <li>
            salad:{" "}
            <span>{ingredients.filter((el) => el === "salad").length}</span>
          </li>
        </ul>
        <h4 className="font-semibold text-base md:text-xl my-2">
          Total Price: ${price.toFixed(2)}
        </h4>
        <p className="text-sm md:text-base">Continue to checkout?</p>
        <div className="my-5 flex items-center">
          <Button type="cancel" close={showModal} />
          <Button type="proceed" proceed={handleCheckout} />
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
