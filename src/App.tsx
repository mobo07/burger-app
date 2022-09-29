import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { ingredients } = useAppSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="checkout"
            element={
              ingredients.length < 1 ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Checkout />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
