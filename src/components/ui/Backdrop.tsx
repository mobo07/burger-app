interface Props {
  toggle: () => void;
}

const Backdrop: React.FC<Props> = ({ toggle }) => {
  return (
    <div
      onClick={toggle}
      className="fixed left-0 top-0 z-[5] w-full h-screen bg-[#00000080] md:hidden"
    ></div>
  );
};

export default Backdrop;
