interface Props {
  toggle: () => void;
}

const Backdrop: React.FC<Props> = ({ toggle }) => {
  return (
    <div
      onClick={toggle}
      className="absolute left-0 top-0 z-[5] w-full h-full bg-[#00000080]"
    ></div>
  );
};

export default Backdrop;
