import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../redux/actions/categoryActions";
import { getProductsAction } from "../redux/actions/productAction";
import { addToCartAction } from "../redux/actions/cartActions";

const Products = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category);
  let products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getProductsAction());
  }, []);

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
              <h1 className="mb-0 bread">Shop</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
                {products.length < 1 ? (
                  <h1>No Products Available</h1>
                ) : (
                  products.map((d) => {
                    return (
                      <div
                        className="col-sm-12 col-md-6 col-lg-4  d-flex"
                        key={d.id}
                      >
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
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li>
                        <a href="/">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="/">2</a>
                      </li>
                      <li>
                        <a href="/">3</a>
                      </li>
                      <li>
                        <a href="/">4</a>
                      </li>
                      <li>
                        <a href="/">5</a>
                      </li>
                      <li>
                        <a href="/">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="sidebar">
                <div className="sidebar-box-2">
                  <h2 className="heading">Categories</h2>
                  <div className="">
                    <div className="">
                      {categories.length < 1 ? (
                        <div className="panel-heading">
                          <h6 className="panel-title">
                            No categories available
                          </h6>
                        </div>
                      ) : (
                        categories.map((d) => {
                          return (
                            <NavLink
                              to={`/products/category/${d.name}`}
                              key={d.id}
                            >
                              <div className="panel-heading">
                                <h4 className="">
                                  <a
                                    href="js:"
                                    onClick={() => {
                                      products = products.filter(
                                        (fp) => fp.name === d.name
                                      );
                                    }}
                                  >
                                    {d.name}
                                  </a>
                                </h4>
                              </div>
                            </NavLink>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4 ">
              <h2 className="mb-4">Follow Us On Instagram</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-2 ">
              <a
                href="images/gallery-1.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/gallery-1.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
                href="images/gallery-2.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/gallery-2.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
                href="images/gallery-3.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/gallery-3.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
                href="images/gallery-4.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/gallery-4.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
                href="images/gallery-5.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/gallery-5.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
                href="images/gallery-6.jpg"
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/gallery-6.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
