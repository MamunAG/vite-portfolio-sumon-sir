import React from "react";

export default function Home() {
  return (
    <>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
      </div>

      {/* End-line */}
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          <li className="active">
            <a href="index.html">Home</a>
          </li>
          <li className="has-children">
            <span
              className="arrow-collapse collapsed"
              data-toggle="collapse"
              data-target="#collapseItem0"
            ></span>
            <a href="practice-areas.html">Practice Areas</a>
            <ul className="collapse" id="collapseItem0">
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li className="has-children">
                <span
                  className="arrow-collapse collapsed"
                  data-toggle="collapse"
                  data-target="#collapseItem1"
                ></span>
                <a href="#">Menu Two</a>
                <ul className="collapse" id="collapseItem1">
                  <li>
                    <a href="#">Sub Menu One</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Menu Three</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="attorneys.html">Attorneys</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>

      <nav className="site-nav dark mb-5">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0">
              Justice<span className="text-primary">.</span>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-right">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li className="has-children">
                <a href="practice-areas.html">Practice Areas</a>
                <ul className="dropdown">
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="attorneys.html">Attorneys</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>

      {/* section:hero */}
      <div
        className="untree_co--hero overlay"
        style={{ backgroundImage: `url('/images/hero_bg.jpg')` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 ml-auto">
              <div className="intro">
                <h1
                  className="mb-4 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <strong className="text-primary">We Fight</strong> For Your
                  Right
                </h1>
                <div
                  className="intro-desc aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <p className="mb-4">
                    Another cool free template by the fine folks at{" "}
                    <a href="https://Colorlib/" target="_blank">
                      Colorlib
                    </a>
                    .
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      Free Consultation
                    </a>
                  </p>

                  {/* <!-- < --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end-section:hero */}
    </>
  );
}
