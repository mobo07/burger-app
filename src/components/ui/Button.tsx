interface Props {
  type: "proceed" | "cancel";
  close?: () => void;
}

const Button = ({ type, close }: Props) => {
  return (
    <button
      onClick={close}
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
