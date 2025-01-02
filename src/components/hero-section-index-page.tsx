import { Link } from "react-router";

export default function HeroSectionIndexPage() {
  return (
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
  );
}
