interface Props {
  type: "proceed" | "cancel";
  close?: () => void;
  proceed?: () => void;
}

const Button = ({ type, close, proceed }: Props) => {
  return (
    <button
      onClick={
        type === "cancel" ? close : type === "proceed" ? proceed : undefined
      }
      className={`${
        type === "proceed"
          ? "text-[#5C9210] bg-[#dcf3bd]"
          : "text-[#944317] bg-[#f8d0ba]"
      } mr-7 font-semibold text-base p-[6px] rounded-md`}
    >
      {type.toUpperCase()}
    </button>
  );
};

export default Button;
