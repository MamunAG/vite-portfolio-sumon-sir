import { DropdownMenuDemo } from "@/components/DropdownMenuDemo";
import { ArrowRight, CarFront, ChevronDown } from "lucide-react";
import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>

      {/* Section: mobile-nav */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
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
      </div>

      {/* Section:nav-bar */}
      <nav className="site-nav dark mb-5 px-5 sm:px-20 ">
        <div className="container">
          <div className="site-navigation flex justify-between">
            <a href="index.html" className="logo m-0 ">
              Justice<span className="text-primary">.</span>
            </a>

            <ul className="site-menu float-right hidden sm:block">
              <li className="active ">
                <a href="index.html">Home</a>
              </li>

              {/* <li className="has-children">
                <a href="#" className="whitespace-nowrap">
                  Practice Areas3
                  <ChevronDown size={16} />
                </a>

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
              </li> */}
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
              className="burger ml-auto sm:hidden"
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
        <div className="h-full w-full">
          <div className="flex justify-center items-center h-full">
            <div className="w-full sm:w-5/12 ml-auto">
              <div className="intro">
                <h1
                  className="mb-4 flex flex-col leading-tight"
                  style={{ marginLeft: 30 }}
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <strong className="text-primary">We Fight</strong> For Your
                  Right
                </h1>
                <div
                  className="intro-desc  line "
                  style={{ marginLeft: 30 }}
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
                  <p className="mt-8">
                    <a
                      href="#"
                      className="btn btn-primary text-slate-50 hover:text-slate-50 p-5 min-w-40"
                    >
                      Free Consultation
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end-section:hero */}

      {/* section:Practice Areas */}
      <div className="untree_co-section" style={{ backgroundColor: "#37373F" }}>
        <div className="p-10 flex flex-wrap gap-12">
          <div className="w-full sm:w-5/12">
            <h2 className="heading mb-4 text-white ">
              Our <strong className="text-primary">Practice Areas</strong>
            </h2>
            <div
              className="md:px-10 "
              style={{ color: "#b2b2b8" }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in.
              </p>
              <p className="mb-4">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="mt-10">
                <a
                  href="#"
                  className="btn btn-primary p-5 px-8 text-white hover:text-white"
                  data-aos="fade-right"
                  data-aos-delay="0"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-5/12">
            <a
              href="#"
              className="flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <span className="wrap-icon text-gray-300">
                <CarFront size={30} />
              </span>

              <div className="text-primary">
                Banking and Finance Law
                <span className="block" style={{ color: "#b2b2b8" }}>
                  Far far away, behind the word mountains, far from the
                  countries
                </span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <span className="wrap-icon text-gray-300">
                <CarFront size={30} />
              </span>

              <div className="text-primary">
                Commercial Law
                <span className="block" style={{ color: "#b2b2b8" }}>
                  Far far away, behind the word mountains, far from the
                  countries
                </span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <span className="wrap-icon text-gray-300">
                <CarFront size={30} />
              </span>

              <div className="text-primary">
                Corporate Law
                <span className="block" style={{ color: "#b2b2b8" }}>
                  Far far away, behind the word mountains, far from the
                  countries
                </span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <span className="wrap-icon text-gray-300">
                <CarFront size={30} />
              </span>

              <div className="text-primary">
                Criminal Law
                <span className="block" style={{ color: "#b2b2b8" }}>
                  Far far away, behind the word mountains, far from the
                  countries
                </span>
              </div>
            </a>
            <p
              className="pl-3 mt-5 text-primary"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <a
                href="practice-areas.html"
                className="more whitespace-nowrap"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <p className="mr-2">More Practice Areas</p> <ArrowRight />
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* end-section:Practice Areas */}

      {/* section: */}

      <div
        className="untree_co-section pt-0 count-numbers"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 " data-aos="fade-up">
              <h2 className="heading text-white">
                <strong className="text-primary">50 Years</strong> of Experience
                in Various Cases
              </h2>
            </div>
            <div
              className="col-md-6 col-lg-3 ml-auto "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="display-2">
                <span className="text-primary counter">
                  <span data-number="90">90</span>
                </span>
                <span className="text-white">+</span>
              </span>
              <strong className="d-block text-white">Awards</strong>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 ml-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="display-2">
                <span className="text-primary counter">
                  <span data-number="3">3</span>K
                </span>
                <span className="text-white">+</span>
              </span>
              <strong className="d-block text-white">Cases Wins</strong>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4"></div>
            <div
              className="col-md-6 col-lg-3 ml-auto "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="display-2">
                <span className="text-primary counter">
                  <span data-number="2">2</span>K
                </span>
                <span className="text-white">+</span>
              </span>
              <strong className="d-block text-white">Clients</strong>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 ml-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="display-2">
                <span className="text-primary counter">
                  <span data-number="200">200</span>
                </span>
                <span className="text-white">+</span>
              </span>
              <strong className="d-block text-white">Attorneys</strong>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section: Happy-client*/}
      <div
        className="untree_co-section slider-wrap bg-primary-dark "
        data-aos="fade"
      >
        <div className="container">
          <h2 className="heading text-white mb-5">
            <strong className="text-primary">Happy</strong> Clients
          </h2>
          <div className="slider owl-carousel owl-3-slider owl-loaded owl-drag">
            <div
              className="owl-stage-outer owl-height"
              style={{ height: "386.344px" }}
            >
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-2263px, 0px, 0px)",
                  transition: "0.7s",
                  width: " 3880px",
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned active"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: " 283.333px", marginRight: "40px" }}
                >
                  <div className="untree_co-testimonial">
                    <blockquote>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                      <div className="bubble">
                        <svg
                          width="49px"
                          height="36px"
                          viewBox="0 0 49 36"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <polygon
                              id="Path"
                              fill="#FFFFFF"
                              points="0.05859375 0.72265625 0.05859375 35.230429 48.65625 0.72265625"
                            ></polygon>
                          </g>
                        </svg>
                      </div>
                    </blockquote>

                    <div className="author d-flex align-items-center">
                      <div className="pic">
                        <img
                          src="images/person_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <strong className="d-block">Carl Anderson</strong>
                        <span className="position">CEO, Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <div className="owl-prev">
                <span className="icon-keyboard_backspace"></span>
              </div>
              <div className="owl-next">
                <span className="icon-keyboard_backspace"></span>
              </div>
            </div>
            <div className="owl-dots">
              <div className="owl-dot">
                <span></span>
              </div>
              <div className="owl-dot active">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-nav">
          <a href="#" className="js-prev js-custom-prev-v2">
            <span className="icon-arrow_back"></span>
          </a>
          <a href="#" className="js-next js-custom-next-v2">
            <span className="icon-arrow_forward"></span>
          </a>
        </div>
      </div>

      {/* section: More Expertise*/}
      <div className="untree_co-section" style={{ backgroundColor: "#37373F" }}>
        <div className="container">
          <h2 className="heading text-white mb-5 " data-aos="fade-right">
            More <strong className="text-primary">Expertise</strong>
          </h2>
          <div className="row">
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3 "
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="service">
                <div className="wrap-icon">
                  <span className="flaticon-suitcase"></span>
                </div>
                <h3>
                  <a href="#">
                    <span className="d-block">Labor and</span> Employment
                  </a>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3 "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="service">
                <div className="wrap-icon">
                  <span className="flaticon-darts"></span>
                </div>
                <h3>
                  <a href="#">
                    <span className="d-block">Corporate &amp; Civil</span>{" "}
                    Litigation
                  </a>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3 "
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service">
                <div className="wrap-icon">
                  <span className="flaticon-crosshair"></span>
                </div>
                <h3>
                  <a href="#">
                    <span className="d-block">Intellectual</span> Proerty Law
                  </a>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-3 "
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="service">
                <div className="wrap-icon">
                  <span className="flaticon-strategy"></span>
                </div>
                <h3>
                  <a href="#">
                    <span className="d-block">Criminal Prosecution</span> and
                    Defense
                  </a>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section: Call us now*/}
      <div className="container" style={{ backgroundColor: "#37373F" }}>
        <div
          className="untree_co-cta overlay "
          style={{ backgroundImage: `url('images/hero_bg.jpg')` }}
          data-aos="fade"
        >
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-7">
              <h2 className="mb-4">
                Let's get started. Call us Now for a Free Consultation
              </h2>
              <p className="mb-0">
                <a href="#" className="btn btn-primary">
                  Call Us Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section: Footer*/}
      <div className="site-footer" style={{ backgroundColor: "#37373F" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="widget">
                <h3>Home</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Practice Area</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Attorneys</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="widget">
                <h3>Practice Area</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">Banking Law</a>
                  </li>
                  <li>
                    <a href="#">Commercial Law</a>
                  </li>
                  <li>
                    <a href="#">Corporate Law</a>
                  </li>
                  <li>
                    <a href="#">Family Law</a>
                  </li>
                  <li>
                    <a href="#">Media Law</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="widget">
                <h3>Services</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">Labor Law</a>
                  </li>
                  <li>
                    <a href="#">Employment</a>
                  </li>
                  <li>
                    <a href="#">Property Law</a>
                  </li>
                  <li>
                    <a href="#">Prosecution</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                <ul className="list-unstyled links mb-4">
                  <li>
                    <a href="tel://11234567890">+1(123)-456-7890</a>
                  </li>
                  <li>
                    <a href="tel://11234567890">+1(123)-456-7890</a>
                  </li>
                  <li>
                    <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                  </li>
                </ul>

                <h3>Connect</h3>
                <ul className="list-unstyled social">
                  <li>
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-pinterest"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p>
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>2024
                All rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                {/* <a href="https://colorlib.com" target="_blank"> */}
                Colorlib
                {/* </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section: overlayer*/}
      <div id="overlayer" style={{ display: "none" }}></div>

      {/* section: loader*/}
      <div className="loader" style={{ display: "none" }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
