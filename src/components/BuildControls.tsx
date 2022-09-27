import BuildControl from "./BuildControl";
import { useAppSelector } from "../redux/hooks";

interface Props {
  handleModal: () => void;
}

const buildControlType = ["meat", "cheese", "bacon", "salad"];

const BuildControls = ({ handleModal }: Props) => {
  const { price } = useAppSelector((state) => state.ingredients);

  return (
    <div className="w-full bg-[#CF8F2E] text-center py-3">
      <p className="mb-5 mt-2">
        Current Price:{" "}
        <span className="font-bold">
          {price === 2.0 ? "$0" : `$${price.toFixed(2)}`}
        </span>
      </p>
      {/* Build Controls */}
      <div className="w-[245px] mx-auto flex flex-col items-center">
        {buildControlType.map((control) => (
          <BuildControl type={control} key={control} />
        ))}
      </div>
      {/* Order btn  */}
      <button
        onClick={handleModal}
        className="my-3 bg-[#dad735] outline-none cursor-pointer border border-[#966909] text-[#966909] text-sm py-[15px] px-[30px] shadow-[2px_2px_2px_#966909] hover:bg-[#a0db41] disabled:bg-[#c7c6c6] disabled:cursor-not-allowed disabled:border-[#ccc] disabled:text-[#888888]"
        disabled={price === 2}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
