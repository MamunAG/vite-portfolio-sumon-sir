import { AppCarousel } from "./app-carousel";

export default function HappyClient() {
  return (
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
  );
}
