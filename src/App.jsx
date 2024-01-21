import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import ProductDetails from "./Components/Screens/ProductDetails";
import Home from "./Components/Screens/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/product_detail" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
