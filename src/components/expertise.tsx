import { ChartArea } from "lucide-react";
import { Link } from "react-router";

export default function Expertise() {
  return (
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
  );
}
