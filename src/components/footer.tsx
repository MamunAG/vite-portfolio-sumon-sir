import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <div
      className="site-footer flex justify-center"
      style={{ backgroundColor: "#37373F" }}
    >
      <div className="container px-5">
        <div className="flex flex-wrap">
          <div className="w-6/12 md:w-3/12">
            <div className="widget">
              <h3>Home</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Practice Area</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Attorneys</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-6/12 md:w-3/12">
            <div className="widget">
              <h3>Practice Area</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="#">Banking Law</a>
                </li>
                <li>
                  <a href="#">Commercial Law</a>
                </li>
                <li>
                  <a href="#">Corporate Law</a>
                </li>
                <li>
                  <a href="#">Family Law</a>
                </li>
                <li>
                  <a href="#">Media Law</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-6/12 md:w-3/12">
            <div className="widget">
              <h3>Services</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="#">Labor Law</a>
                </li>
                <li>
                  <a href="#">Employment</a>
                </li>
                <li>
                  <a href="#">Property Law</a>
                </li>
                <li>
                  <a href="#">Prosecution</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-6/12 md:w-3/12">
            <div className="widget">
              <h3>Contact</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }} className="mb-4">
                43 Raymouth Rd. Baltemoer, London 3910
              </p>
              <ul className="list-unstyled links mb-4">
                <li>
                  <a href="tel://11234567890">+1(123)-456-7890</a>
                </li>
                <li>
                  <a href="tel://11234567890">+1(123)-456-7890</a>
                </li>
                <li>
                  <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                </li>
              </ul>

              <h3>Connect</h3>
              <ul className="social flex gap-1">
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Instagram size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Twitter size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Facebook size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Linkedin size={16} />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PiIcon size={16} />
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Dribbble size={16} />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex mt-5">
          <div className="w-full text-center">
            <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2024 All
              rights reserved.
              {/* </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
