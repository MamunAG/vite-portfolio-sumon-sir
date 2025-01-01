import { useSideBarStore } from "@/store/side-bar-store";
import { Link } from "react-router";
import React from "react";

export default function MobileNavBar() {
  const store = useSideBarStore();
  const inputRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    inputRef.current?.click();
  }, [store.isOpenSidebar]);
  return (
    <div
      className=""
      style={{ right: `${store.isOpenSidebar ? "0px" : "-360px"}` }}
    >
      <div className="site-mobile-menu-body" style={{ overflow: "hidden" }}>
        <ul className="site-nav-wrap">
          <li className="px-10 py-2  w-full hover:text-primary">
            <Link to="index.html">Home</Link>
          </li>
          <li className="px-10 py-2  w-full text-gray-800 hover:text-primary">
            <Link to="services.html">Services</Link>
          </li>
          <li className="px-10 py-2  w-full text-gray-800 hover:text-primary">
            <Link to="attorneys.html">Attorneys</Link>
          </li>
          <li className="px-10 py-2  w-full text-gray-800 hover:text-primary">
            <Link to="about.html">About</Link>
          </li>
          <li className="px-10 py-2  w-full text-gray-800 hover:text-primary">
            <Link to="contact.html">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
