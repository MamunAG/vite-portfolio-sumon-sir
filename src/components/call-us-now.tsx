import { Link } from "react-router";

export default function CallUsNow() {
  const cellNumber = "+880 1921-876606";
  const whatsappNumber = "+880 192-1876606";
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
          <div className="mb-0 flex flex-col justify-center items-center gap-1">
            <Link
              className="btn btn-primary text-white hover:text-white w-10/12 md:w-6/12 lg:w-7/12 whitespace-nowrap"
              to={`tel:${cellNumber}`}
            >
              Call Us: {cellNumber}
            </Link>
            <Link
              className="btn btn-primary text-white hover:text-white w-10/12 md:w-6/12 lg:w-7/12 whitespace-nowrap"
              to={`https://wa.me/${whatsappNumber}`}
            >
              Whatsapp Us: {whatsappNumber}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
