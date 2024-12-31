import { useSideBarStore } from "@/store/side-bar-store";
import { X } from "lucide-react";
import { Link } from "react-router";

export default function MobileNavBar() {
  const store = useSideBarStore();
  return (
    <div
      className="min-w-[360px] max-w-[360px] fixed top-0 z-[2001] h-full max-h-full bg-white transition-all duration-700"
      style={{ right: `${store.isOpenSidebar ? "0px" : "-360px"}` }}
    >
      <div className="flex justify-end pr-20 py-5 font-extralight">
        <X
          size={37}
          className="text-slate-700"
          style={{ fontWeight: "100" }}
          onClick={() => store.setOpenSideBar(false)}
        />
      </div>
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
