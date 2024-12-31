import { Link } from "react-router";

export default function CallUsNow() {
  return (
    <div
      className="container px-5 md:px-52 relative flex justify-center items-center"
      style={{ backgroundColor: "#37373F" }}
    >
      <div
        className="rounded-md h-[24rem] opacity-65 w-full"
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
              to="#"
              className="btn btn-primary text-white hover:text-white"
            >
              Call Us Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
