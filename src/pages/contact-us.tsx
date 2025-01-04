import HeroSectionOtherPage from "@/components/hero-section-other-page";

export default function ContactUs() {
  return (
    <>
      <HeroSectionOtherPage normalText="Contact" strongText="Us" />
      <div
        className="untree_co-section flex justify-center"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container px-5 sm:px-0">
          <div className="flex justify-center">
            <div className="w-full flex justify-center">
              <form className="w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <div className="form-group">
                      <label
                        className=""
                        htmlFor="fname"
                        style={{ color: "#b2b2b8" }}
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control px-2"
                        id="fname"
                      />
                    </div>
                  </div>
                  <div className="w-6/12">
                    <div className="form-group">
                      <label
                        className=""
                        htmlFor="lname"
                        style={{ color: "#b2b2b8" }}
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control px-2"
                        id="lname"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <div className="form-group">
                      <label
                        className=""
                        htmlFor="email"
                        style={{ color: "#b2b2b8" }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control px-2"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="w-6/12">
                    <div className="form-group">
                      <label
                        className=""
                        htmlFor="phone-number"
                        style={{ color: "#b2b2b8" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control px-2"
                        id="phone-number"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label
                    className=""
                    htmlFor="message"
                    style={{ color: "#b2b2b8" }}
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    className="form-control px-2 min-h-36"
                    id="message"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
