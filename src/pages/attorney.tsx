import HeroSectionOtherPage from "@/components/hero-section-other-page";
import { ArrowRight } from "lucide-react";

const data: {
  firstName: string;
  lastName: string;
  designation: string;
  speech: string;
  image: string;
}[] = [
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_1.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_2.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_3.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_4.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_1.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_2.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_3.jpg",
  },
  {
    firstName: "Jeremy",
    lastName: "Walker",
    designation: "CEO, Founder, Atty.",
    speech: `Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    image: "/images/person_4.jpg",
  },
];

export default function Attorneys() {
  return (
    <>
      <HeroSectionOtherPage normalText="Our Expert" strongText="Attorneys" />

      <div
        className="untree_co-section pb-5 flex justify-center items-center"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container">
          <div className="flex flex-wrap">
            {data.map((d) => (
              <div
                className="md:w-6/12 mb-5 lg:mb-5 lg:w-3/12"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <div className="team p-3">
                  <div className="pic">
                    <img src={d.image} alt="Image" className="img-fluid" />
                  </div>
                  <h3 className="mb-1">
                    <a href="#" className="text-primary flex flex-col">
                      <span className="d-block">{d.firstName}</span>
                      <span className="d-block">{d.lastName}</span>
                    </a>
                  </h3>
                  <p className="block position mb-5">{d.designation}</p>
                  <p style={{ color: "#b2b2b8" }} className="mb-4">
                    {d.speech}
                  </p>
                  <p className="mb-0 text-primary flex items-center">
                    <a href="#" className="more">
                      Learn More
                    </a>
                    <ArrowRight size={16} color="white" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
