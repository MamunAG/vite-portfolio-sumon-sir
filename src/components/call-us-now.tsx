import { Link } from "react-router";

export default function CallUsNow() {
  const cellNumber = "555-555-5555";
  return (
    <div
      className="px-5 relative flex justify-center items-center"
      style={{ backgroundColor: "#37373F" }}
    >
      <div
        className="container rounded-md h-[24rem] opacity-65 w-full"
        style={{
          backgroundImage: `url('/images/hero_bg.jpg')`,
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="flex justify-center items-center text-center absolute top-0 left-0  w-full"
        style={{ minHeight: "100%" }}
      >
        <div className="w-10/12 lg:w-5/12 ">
          <h1 className="mb-4" style={{ color: "white" }}>
            <span className="text-white text-3xl">
              Let's get started. Call us Now for a Free Consultation
            </span>
          </h1>
          <p className="mb-0">
            <Link
              // to="/contact-us"
              className="btn btn-primary text-white hover:text-white"
              // onClick={() => {
              //   window.location.href = "/contact-us";
              // }}
              to={`tel:${cellNumber}`}
            >
              Call Us Now: {cellNumber}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
