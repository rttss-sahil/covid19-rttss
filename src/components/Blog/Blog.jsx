import React from "react";
import { NavLink } from "react-router-dom";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog__area" id="blog">
      <div className="container">
        <div className="row">
          <div className="blog__main">
            <div className="blog__left">
              <div className="title fadeInRight">
                <p className="title__top">News Feed</p>
                <h2>Stay updated with our news feed.</h2>
                <h4>
                  COVID-19 symptoms range from mild to severe. It takes 2-14
                  days after exposure for symptoms to develop.{" "}
                </h4>
              </div>
              <NavLink
                to={{
                  pathname: "/blog",
                }}
                className="cbtn btn1"
              >
                Check Out All Blog
              </NavLink>
            </div>
            <div className="blog__right">
              <div className="blog__lists fadeInRight">
                <div className="single__blog">
                  <div className="single__blog__img">
                    <img src="assets/images/light/news1.jpg" alt="" />
                  </div>
                  <p className="title__top">Statistics</p>
                  <NavLink to={{}}>
                    Some countries provide clear and helpful data on testing.
                  </NavLink>
                  <NavLink to={{ pathname: "/blog" }} className="readmore">
                    read more <i className="far fa-angle-right"></i>
                  </NavLink>
                </div>
                <div className="single__blog wow fadeInRight">
                  <div className="single__blog__img">
                    <img src="assets/images/light/news2.jpg" alt="" />
                  </div>
                  <p className="title__top">Statistics</p>
                  <NavLink to={{}}>
                    Some countries provide clear and helpful data on testing.
                  </NavLink>
                  <NavLink
                    to={{
                      pathname: "/blog",
                    }}
                    className="readmore"
                  >
                    read more <i className="far fa-angle-right"></i>
                  </NavLink>
                </div>
                <div className="single__blog wow fadeInRight">
                  <div className="single__blog__img">
                    <img src="assets/images/light/news1.jpg" alt="" />
                  </div>
                  <p className="title__top">Statistics</p>
                  <NavLink
                    to={{
                      pathname: "/blog",
                    }}
                  >
                    Some countries provide clear and helpful data on testing.
                  </NavLink>
                  <NavLink to={{ pathname: "blog" }} className="readmore">
                    read more <i className="far fa-angle-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/images/light/shape__white2.png"
        alt=""
        className="blog__img blog__img1"
      />
      <img
        src="assets/images/light/shape__white2.png"
        alt=""
        className="blog__img blog__img1"
      />
    </div>
  );
}

export default Blog;
