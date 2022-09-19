import BuildControls from "../components/BuildControls";
import Burger from "../components/burger/Burger";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Burger />
        <BuildControls />
      </div>
    </div>
  );
}
