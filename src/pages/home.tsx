import { ArrowRight, CarFront, ChartArea, X } from "lucide-react";
import "./home.css";
import CallUsNow from "@/components/call-us-now";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import React from "react";
import { Link } from "react-router";
import { AppCarousel } from "@/components/app-carousel";
import MobileNavBar from "@/components/mobile-nav-bar";

export default function Home() {
  const [isOpenSidebar, setOpenSideBar] = React.useState<boolean>();
  return (
    <>
      {/* Section: mobile-nav */}
      <MobileNavBar
        isOpenSidebar={isOpenSidebar}
        setOpenSideBar={setOpenSideBar}
      />

      {/* Section:nav-bar */}
      <NavBar setOpenSideBar={setOpenSideBar} />

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
                    <Link to="https://Colorlib/" target="_blank">
                      Colorlib
                    </Link>
                    .
                  </p>
                  <p className="mt-8">
                    <Link
                      to="#"
                      className="btn btn-primary text-slate-50 hover:text-slate-50 p-5 min-w-40"
                    >
                      Free Consultation
                    </Link>
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
                <Link
                  to="#"
                  className="btn btn-primary p-5 px-8 text-white hover:text-white"
                  data-aos="fade-right"
                  data-aos-delay="0"
                >
                  Learn More
                </Link>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-5/12">
            <Link
              to="#"
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
            </Link>

            <Link
              to="#"
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
            </Link>

            <Link
              to="#"
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
            </Link>
            <Link
              to="#"
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
            </Link>
            <p
              className="pl-3 mt-5 text-primary"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Link
                to="practice-areas.html"
                className="more whitespace-nowrap"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <p className="mr-2">More Practice Areas</p> <ArrowRight />
              </Link>
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
          <Link to="#" className="js-prev js-custom-prev-v2">
            <span className="icon-arrow_back"></span>
          </Link>
          <Link to="#" className="js-next js-custom-next-v2">
            <span className="icon-arrow_forward"></span>
          </Link>
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
                  <Link to="#">
                    <span className="d-block">Labor and</span> Employment
                  </Link>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <Link to="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </Link>
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
                  <Link to="#">
                    <span className="d-block">Corporate &amp; Civil</span>{" "}
                    Litigation
                  </Link>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <Link to="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </Link>
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
                  <Link to="#">
                    <span className="d-block">Intellectual</span> Proerty Law
                  </Link>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <Link to="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </Link>
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
                  <Link to="#">
                    <span className="d-block">Intellectual</span> Proerty Law
                  </Link>
                </h3>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <Link to="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </Link>
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
