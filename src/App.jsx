import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Collections from "./Pages/Collections";
import Cart from "./Pages/Cart";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
  );
}

export default App;
