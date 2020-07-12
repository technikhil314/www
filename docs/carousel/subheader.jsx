import React from "react";
export const SubHeader = (props) => {
  return (
    <>
      <nav className="navbar sub-navbar navbar--light navbar--fixed-top">
        <div className="navbar__inner">
          <div className="navbar__items">
            <a className="navbar__brand">
              Carousel <br /> Webcomponent
            </a>
          </div>
        </div>
        <div className="navbar__items navbar__items">
          <div>
            <a href="https://www.npmjs.com/package/@technikhil/carousel-webcomponent">
              <img
                src="https://img.shields.io/npm/v/@technikhil/carousel-webcomponent"
                alt=""
              />
            </a>{" "}
            <a href="/">
              <img
                src="https://img.shields.io/github/last-commit/technikhil314/carousel-web-component?label=Last%20Commit"
                alt=""
              />
            </a>{" "}
          </div>
          <div>
            <a href="https://twitter.com/technikhil314">
              <img
                src="https://img.shields.io/twitter/follow/technikhil314?label=Follow%20Me&style=social"
                alt=""
              />
            </a>{" "}
            <a href="https://github.com/technikhil314/carousel-web-component/fork">
              <img
                src="https://img.shields.io/github/forks/technikhil314/carousel-web-component?style=social"
                alt=""
              />
            </a>{" "}
            <a href="https://github.com/technikhil314/carousel-web-component">
              <img
                src="https://img.shields.io/github/stars/technikhil314/carousel-web-component?style=social"
                alt=""
              />
            </a>{" "}
            <a href="https://github.com/technikhil314/carousel-web-component/subscription">
              <img
                src="https://img.shields.io/github/watchers/technikhil314/carousel-web-component?style=social"
                alt=""
              />
            </a>{" "}
          </div>
        </div>
      </nav>
      <br />
    </>
  );
};
