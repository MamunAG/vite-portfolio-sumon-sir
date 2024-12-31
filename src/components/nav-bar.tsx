import React from "react";

export default function NavBar({
  setOpenSideBar,
}: {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  return (
    <nav className="site-nav dark mb-5 px-5 sm:px-20 ">
      <div className="container">
        <div className="site-navigation flex justify-between">
          <a href="index.html" className="logo m-0 ">
            Justice<span className="text-primary">.</span>
          </a>

          <ul className="site-menu float-right hidden sm:block">
            <li className="active ">
              <a href="index.html">Home</a>
            </li>

            {/* <li className="has-children">
                <a href="#" className="whitespace-nowrap">
                  Practice Areas3
                  <ChevronDown size={16} />
                </a>

                <ul className="dropdown">
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li> */}
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="attorneys.html">Attorneys</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>

          <a
            href="#"
            className="burger ml-auto sm:hidden"
            onClick={() => setOpenSideBar(true)}
          >
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
