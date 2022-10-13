import { Form, Formik, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { uploadOrderAction } from "../redux/actions/OrderUploadAction";
import { getProductsAction } from "../redux/actions/productAction";

const CheckOut = () => {
  const cartProduct = useSelector((state) => state.cart);

  const products = useSelector((state) => state.product);

  const order = useSelector((state) => state.order);
  // console.log(order);

  const cartItems = [];

  cartProduct.map((cpd) => {
    products.map((pd) => {
      if (cpd.id === pd.id) {
        cartItems.push(pd);
      }
    });
  });

  let total = 0;
  // console.log(cartProduct, cartItems);

  cartProduct.map((d) => {
    cartItems.map((ci) => {
      if (d.id === ci.id) {
        total += d.qty * ci.pprice;
      }
    });
  });

  const dispatch = useDispatch();

  const handlePlaceOrder = (data) => {
    dispatch(uploadOrderAction({ ...data, orders: cartProduct }));
  };

  let schema = yup.object().shape({
    fname: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required("Please enter your full Name."),
    country: yup.string().required("Please select your Country."),
    street: yup.string().required("Please enter street address."),
    appartment: yup.string().required("Please enter appartment."),
    city: yup.string().required("Please enter city."),
    zip: yup
      .string()
      .matches(/^[0-9]{6}$/, "Must be exactly 6 digits of zip code.")
      .required("Please enter zip code."),
    phone: yup
      .string("Please enter numbers.")
      .matches(/^[0-9]{10}$/, "Must be exactly 10 digits of mobile number.")
      .required("Please enter mobile number."),
    email: yup
      .string()
      .email("Please enter proper E-mail.")
      .required("Please Enter Email."),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      country: "",
      street: "",
      appartment: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handlePlaceOrder(values);
      resetForm();
    },
    enableReinitialize: true,
  });

  const {
    handleSubmit,
    handleBlur,
    errors,
    touched,
    handleChange,
    resetForm,
    values,
  } = formik;

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: 'url("assets/images/bg_6.jpg")' }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>
                <span>Checkout</span>
              </p>
              <h1 className="mb-0 bread">Checkout</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 ">
              <Formik values={formik}>
                <Form onSubmit={handleSubmit} className="billing-form">
                  <h3 className="mb-4 billing-heading">Billing Details</h3>
                  <div className="row align-items-end">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="firstname">Firt Name</label>
                        <input
                          type="text"
                          name="fname"
                          className="form-control"
                          placeholder="Enter your full Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fname}
                        />
                        {errors.fname && touched.fname ? (
                          <p className="error">{errors.fname}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="country">State / Country</label>
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select
                            name="country"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.country}
                          >
                            <option value="">---Please Select---</option>
                            <option value="India">India</option>
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Philippines">Philippines</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Hongkong">Hongkong</option>
                            <option value="Japan">Japan</option>
                          </select>
                          {errors.country && touched.country ? (
                            <p className="error">{errors.country}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="streetaddress">Street Address</label>
                        <input
                          type="text"
                          name="street"
                          className="form-control"
                          placeholder="House number and street name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.street}
                        />
                        {errors.street && touched.street ? (
                          <p className="error">{errors.street}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="appartment"
                          className="form-control"
                          placeholder="Appartment, suite, unit "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.appartment}
                        />
                        {errors.appartment && touched.appartment ? (
                          <p className="error">{errors.appartment}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="towncity">Town / City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          placeholder="City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        />
                        {errors.city && touched.city ? (
                          <p className="error">{errors.city}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="postcodezip">Postcode / ZIP *</label>
                        <input
                          type="text"
                          name="zip"
                          className="form-control"
                          placeholder="Zip code"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.zip}
                        />
                        {errors.zip && touched.zip ? (
                          <p className="error">{errors.zip}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="9090909090"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                        {errors.phone && touched.phone ? (
                          <p className="error">{errors.phone}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="emailaddress">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="abc123@gmail.com"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email ? (
                          <p className="error">{errors.email}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 pt-3 d-flex">
                    <div className="col-md-6 d-flex">
                      <div className="cart-detail cart-total bg-light p-3 p-md-4">
                        <h3 className="billing-heading mb-4">Cart Total</h3>
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
                    </div>
                    <div className="col-md-6">
                      <div className="cart-detail bg-light p-3 p-md-4">
                        <h3 className="billing-heading mb-4">Payment Method</h3>
                        <div className="form-group">
                          <div className="col-md-12">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="optradio"
                                  className="mr-2"
                                  value={"Direct Bank Tranfer"}
                                  required
                                />
                                Direct Bank Tranfer
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="optradio"
                                  className="mr-2"
                                  value={"Check Payment"}
                                  required
                                />
                                Check Payment
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="optradio"
                                  className="mr-2"
                                  value={"G-Pay"}
                                  required
                                />
                                G-Pay
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12">
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="terms"
                                  value={true}
                                  className="mr-2"
                                  required
                                />
                                I have read and accept the terms and conditions
                              </label>
                            </div>
                          </div>
                        </div>
                        <p>
                          <button
                            type="submit"
                            className="btn btn-primary py-3 px-4"
                          >
                            Place an order
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
              {/* END */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
