import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addToCartAction,
  decrementToCartAction,
  removeFromCartAction,
} from "../redux/actions/cartActions";
import { getProductsAction } from "../redux/actions/productAction";

const Cart = () => {
  // const [total, setTotal] = useState(0);
  let total = 0;
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => state.cart);
  // const productCounter = useSelector((state) => state.productCounter);
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const cartItems = [];

  cartProduct.map((cpd) => {
    products.map((pd) => {
      if (cpd.id === pd.id) {
        cartItems.push(pd);
      }
    });
  });
  console.log(cartProduct, cartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const handleIncrement = (id) => {
    dispatch(addToCartAction({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementToCartAction({ id }));
  };

  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: "url(assets/images/bg_6.jpg)" }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>
                <span>Cart</span>
              </p>
              <h1 className="mb-0 bread">My Wishlist</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length < 1 ? (
                      <h2>No Item Added To Cart</h2>
                    ) : (
                      cartItems.map((d, i) => {
                        return (
                          <tr className="text-center" key={d.id}>
                            <td className="product-remove">
                              <a
                                href="js:"
                                onClick={() => handleRemoveFromCart(d.id)}
                              >
                                <span className="ion-ios-close" />
                              </a>
                            </td>
                            <td className="image-prod ">
                              <div
                                className="img"
                                style={{
                                  background: `url("${d.pimage}") no-repeat center`,
                                  backgroundSize: "cover",
                                }}
                              />
                            </td>
                            <td className="product-name">
                              <h3>{d.productName}</h3>
                              <p className="cartDesc">{d.pdesc}</p>
                            </td>
                            <td className="price">&#x20B9; {d.pprice}</td>
                            <td className="quantity">
                              <div className="input-group mb-3">
                                <span className="input-group-btn mr-2">
                                  <button
                                    type="button"
                                    className="quantity-left-minus btn"
                                    data-type="minus"
                                    data-field
                                    onClick={() => handleDecrement(d.id)}
                                  >
                                    <i className="ion-ios-remove" />
                                  </button>
                                </span>
                                <input
                                  type="text"
                                  id="quantity"
                                  name="quantity"
                                  className="quantity form-control input-number"
                                  value={cartProduct[i].qty}
                                  min={1}
                                  max={100}
                                />
                                <span className="input-group-btn ml-2">
                                  <button
                                    type="button"
                                    className="quantity-right-plus btn"
                                    data-type="plus"
                                    data-field
                                    onClick={() => handleIncrement(d.id)}
                                  >
                                    <i className="ion-ios-add" />
                                  </button>
                                </span>
                              </div>
                            </td>
                            <td className="total">
                              &#x20B9;
                              {
                                ((total += cartProduct[i].qty * d.pprice),
                                cartProduct[i].qty * d.pprice)
                              }
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>&#x20B9; {total}</span>
                </p>
                <p className="d-flex">
                  <span>Delivery(Free)</span>
                  <span>&#x20B9; 0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount(-10%)</span>
                  <span>&#x20B9; {total / 10} </span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>&#x20B9; {total - total / 10}</span>
                </p>
              </div>
              <p className="text-center">
                <NavLink to="/checkout" className="btn btn-primary py-3 px-4">
                  Proceed to Checkout
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
