import { ArrowRight, CarFront, ChartArea } from "lucide-react";
import "./home.css";
import { AppCarousel } from "@/components/app-carousel";
import CallUsNow from "@/components/call-us-now";
import Footer from "@/components/footer";

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
        className="untree_co-section pt-0 count-numbers flex justify-center p-7"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container">
          <div className="flex items-center flex-wrap ">
            <div className="lg:w-4/12 " data-aos="fade-up">
              <h2 className="heading text-white text-left md:pl-10">
                <strong className="text-primary">50 Years</strong> of Experience
                in Various Cases
              </h2>
            </div>
            <div
              className="md:w-6/12 lg:w-3/12 ml-auto "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="display-2">
                <span className="text-primary counter">
                  <span
                    data-number="90"
                    style={{ fontSize: "5rem" }}
                    className="font-light"
                  >
                    90
                  </span>
                </span>
                <span
                  className="text-white font-light"
                  style={{ fontSize: "5rem" }}
                >
                  +
                </span>
              </span>
              <p>
                <strong className="d-block text-white">Awards</strong>
              </p>
              <p style={{ color: "#b2b2b8" }}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
            <div
              className="md:w-6/12 lg:w-3/12 ml-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="display-2">
                <span
                  className="text-primary counter font-light"
                  style={{ fontSize: "5rem" }}
                >
                  <span
                    data-number="3"
                    style={{ fontSize: "5rem" }}
                    className="font-light"
                  >
                    3
                  </span>
                  K
                </span>
                <span
                  className="text-white font-light"
                  style={{ fontSize: "5rem" }}
                >
                  +
                </span>
              </span>
              <p>
                <strong className="d-block text-white">Cases Wins</strong>
              </p>
              <p style={{ color: "#b2b2b8" }}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="lg:w-4/12"></div>
            <div
              className="md:w-6/12 lg:w-3/12 ml-auto "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="display-2">
                <span
                  className="text-primary counter font-light"
                  style={{ fontSize: "5rem" }}
                >
                  <span
                    data-number="2"
                    style={{ fontSize: "5rem" }}
                    className="font-light"
                  >
                    2
                  </span>
                  K
                </span>
                <span
                  className="text-white font-light"
                  style={{ fontSize: "5rem" }}
                >
                  +
                </span>
              </span>
              <p>
                <strong className="d-block text-white">Clients</strong>
              </p>
              <p style={{ color: "#b2b2b8" }}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
            <div
              className="md:w-6/12 lg:w-3/12 ml-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="display-2">
                <span className="text-primary counter">
                  <span
                    data-number="200"
                    style={{ fontSize: "5rem" }}
                    className="font-light"
                  >
                    200
                  </span>
                </span>
                <span
                  className="text-white font-light"
                  style={{ fontSize: "5rem" }}
                >
                  +
                </span>
              </span>
              <p>
                <strong className="d-block text-white">Attorneys</strong>
              </p>
              <p style={{ color: "#b2b2b8" }}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section: Happy-client*/}
      <div
        className="untree_co-section slider-wrap bg-primary-dark p-10"
        data-aos="fade"
      >
        <div className="container min-w-full md:px-32">
          <h2 className="heading text-white mb-5">
            <strong className="text-primary">Happy</strong> Clients
          </h2>
          <div className="w-full flex justify-center">
            <AppCarousel />
          </div>
        </div>

        {/* <div className="slider-nav">
          <a href="#" className="js-prev js-custom-prev-v2">
            <span className="icon-arrow_back"></span>
          </a>
          <a href="#" className="js-next js-custom-next-v2">
            <span className="icon-arrow_forward"></span>
          </a>
        </div> */}
      </div>

      {/* section: More Expertise*/}
      <div
        className="untree_co-section p-5 md:p-32"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container min-w-full">
          <h2 className="heading text-white mb-5 " data-aos="fade-right">
            More <strong className="text-primary">Expertise</strong>
          </h2>
          <div className="flex flex-row flex-wrap m-0 p-0">
            <div
              className="w-full md:w-6/12 mb-4 lg:mb-0 lg:w-3/12 p-2"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="service">
                <div className="wrap-icon text-slate-100">
                  <ChartArea />
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
              className="w-full md:w-6/12 mb-4 lg:mb-0 lg:w-3/12  p-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="service">
                <div className="wrap-icon text-slate-100">
                  <ChartArea />
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
              className="w-full md:w-6/12 mb-4 lg:mb-0 lg:w-3/12  p-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service">
                <div className="wrap-icon text-slate-100">
                  <ChartArea />
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
              className="w-full md:w-6/12 mb-4 lg:mb-0 lg:w-3/12  p-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service">
                <div className="wrap-icon text-slate-100">
                  <ChartArea />
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
          </div>
        </div>
      </div>

      {/* section: Call us now*/}
      <CallUsNow />

      {/* section: Footer*/}
      <Footer />

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
