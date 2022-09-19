import BuildControl from "./BuildControl";

const BuildControls = () => {
  return (
    <div className="w-full bg-[#CF8F2E] text-center py-3">
      <p className="mb-5 mt-2">
        Current Price: <span className="font-bold">$6.40</span>
      </p>
      {/* Build Controls */}
      <div className="w-full flex flex-col items-center">
        <BuildControl />
        <BuildControl />
        <BuildControl />
        <BuildControl />
      </div>
      {/* Order btn  */}
      <button
        className="my-3 bg-[#dad735] outline-none cursor-pointer border border-[#966909] text-[#966909] text-sm py-[15px] px-[30px] shadow-[2px_2px_2px_#966909] hover:bg-[#a0db41] disabled:bg-[#c7c6c6] disabled:cursor-not-allowed disabled:border-[#ccc] disabled:text-[#888888]"
        disabled
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
