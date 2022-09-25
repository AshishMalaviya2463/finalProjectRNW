import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './component/Header';
import Home from './container/Home';
import Footer from './component/Footer';
import About from './container/About';
import Blog from './container/Blog';
import Contact from './container/Contact';
import Cart from './container/Cart';
import Products from './container/Products';
import Product from './container/Product';
import CheckOut from './container/CheckOut';
import Login from './container/Login';
import Registration from './container/Registration';
import PrivetRoute from './container/routers/PrivetRoute';
import { SnackbarProvider } from "notistack"

function App() {
  return (
    <>
      <SnackbarProvider>      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path='/product' element={<PrivetRoute />}>
            <Route exact path='/product' element={<Product />} />
          </Route>
          <Route exact path='/checkout' element={<PrivetRoute />}>
            <Route exact path='/checkout' element={<CheckOut />} />
          </Route>
          {/* <PrivetRoute exact path="/product" element={<Product />} /> */}
          {/* <PrivetRoute exact path="/checkout" element={<CheckOut />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </SnackbarProvider>

    </>
  );
}

export default App;
