import { ArrowRight, CarFront } from "lucide-react";
import { Link } from "react-router";

export default function PracticeArea() {
  return (
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
                Far far away, behind the word mountains, far from the countries
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
                Far far away, behind the word mountains, far from the countries
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
                Far far away, behind the word mountains, far from the countries
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
                Far far away, behind the word mountains, far from the countries
              </span>
            </div>
          </Link>
          <div
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
          </div>
        </div>
      </div>
    </div>
  );
}
