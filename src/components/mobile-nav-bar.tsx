import { useSideBarStore } from "@/store/side-bar-store";
import { Link, useLocation } from "react-router";

export default function MobileNavBar() {
  const store = useSideBarStore();

  const location = useLocation();

  return (
    <div
      className=""
      style={{ right: `${store.isOpenSidebar ? "0px" : "-360px"}` }}
    >
      <div className="site-mobile-menu-body" style={{ overflow: "hidden" }}>
        <ul className="site-nav-wrap">
          <li
            className={`px-10 py-2  w-full ${
              location.pathname === "/" ? "text-primary" : "text-gray-800"
            }`}
          >
            <Link to="/" onClick={() => store.setOpenSideBar(false)}>
              Home
            </Link>
          </li>
          <li
            className={`px-10 py-2  w-full ${
              location.pathname === "/services"
                ? "text-primary"
                : "text-gray-800"
            }`}
          >
            <Link to="/services" onClick={() => store.setOpenSideBar(false)}>
              Services
            </Link>
          </li>
          <li
            className={`px-10 py-2  w-full ${
              location.pathname === "/attorneys"
                ? "text-primary"
                : "text-gray-800"
            }`}
          >
            <Link to="/attorneys" onClick={() => store.setOpenSideBar(false)}>
              Attorneys
            </Link>
          </li>
          <li
            className={`px-10 py-2  w-full ${
              location.pathname === "/about" ? "text-primary" : "text-gray-800"
            }`}
          >
            <Link to="/about" onClick={() => store.setOpenSideBar(false)}>
              About
            </Link>
          </li>
          <li
            className={`px-10 py-2  w-full ${
              location.pathname === "/contact-us"
                ? "text-primary"
                : "text-gray-800"
            }`}
          >
            <Link to="/contact-us" onClick={() => store.setOpenSideBar(false)}>
              Contact Us
            </Link>
          </li>
          <li
            className={`px-10 py-2  w-full ${
              location.pathname === "/blogs" ? "text-primary" : "text-gray-800"
            }`}
          >
            <Link to="/blogs" onClick={() => store.setOpenSideBar(false)}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
