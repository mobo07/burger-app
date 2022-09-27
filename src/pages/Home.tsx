import { useState } from "react";
import BuildControls from "../components/BuildControls";
import Burger from "../components/burger/Burger";
import Navbar from "../components/Navbar";
import Modal from "../components/ui/Modal";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative w-full h-full">
      <Navbar />
      <div className="">
        <AnimatePresence>
          {showModal && <Modal showModal={handleModal} />}
        </AnimatePresence>
        <Burger />
        <BuildControls handleModal={handleModal} />
      </div>
    </div>
  );
}
