import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addToCartAction } from "../redux/actions/cartActions";

const CategoryProducts = () => {
  const { name } = useParams();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);

  const categoryProducts = products.filter(
    (d) => d.category.toString().toLowerCase() === name.toString().toLowerCase()
  );
  console.log(categoryProducts);

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
                <span>Shop</span>
              </p>
              <h1 className="mb-0 bread">{name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {categoryProducts.length < 1 ? (
            <h1>No Products Available</h1>
          ) : (
            categoryProducts.map((d) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-3  d-flex" key={d.id}>
                  <div className="product d-flex flex-column ">
                    <NavLink
                      to={`/product/${d.id}`}
                      className="img-prod py-5 h-100"
                    >
                      <img
                        className="img-fluid h-100 w-100"
                        src={d.pimage}
                        alt="Colorlib Template"
                      />
                      <div className="overlay" />
                    </NavLink>
                    <div className="text py-3 pb-4 px-3">
                      <div className="d-flex">
                        <div className="cat">
                          <span>Lifestyle</span>
                        </div>
                        <div className="rating">
                          <p className="text-right mb-0">
                            <a href="/">
                              <span className="ion-ios-star-outline" />
                            </a>
                            <a href="/">
                              <span className="ion-ios-star-outline" />
                            </a>
                            <a href="/">
                              <span className="ion-ios-star-outline" />
                            </a>
                            <a href="/">
                              <span className="ion-ios-star-outline" />
                            </a>
                            <a href="/">
                              <span className="ion-ios-star-outline" />
                            </a>
                          </p>
                        </div>
                      </div>
                      <h3>
                        <a href="/">{d.productName}</a>
                      </h3>
                      <div className="pricing">
                        <p className="price">
                          <span>&#x20B9;{d.pprice}</span>
                        </p>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <a
                          href="js:"
                          className="add-to-cart text-center py-2 mr-1"
                          onClick={() =>
                            dispatch(addToCartAction({ id: d.id }))
                          }
                        >
                          <span>
                            Add to cart <i className="ion-ios-add ml-1" />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
