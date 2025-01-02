import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { LucideMenu } from "lucide-react";
import MobileNavBar from "./mobile-nav-bar";
import { Link, useLocation } from "react-router";
const routes = ["/services", "/about", "/contact-us", "/attorneys"];

export default function NavBar() {
  const location = useLocation();
  const textColor = routes.includes(location.pathname)
    ? "rgba(255, 255, 255, 0.5)"
    : "";
  return (
    <>
      <nav className="site-nav dark mb-5 px-5 sm:px-20 flex justify-between">
        <div
          className="site-navigation w-full"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            className="logo m-0 text-white"
            style={{
              color: `${routes.includes(location.pathname) ? "white" : ""}`,
            }}
          >
            Justice<span className="text-primary">.</span>
          </Link>

          <ul className="site-menu float-right hidden sm:block">
            <li className="active ">
              <Link
                to="/"
                className="hover:text-white"
                style={{ color: `${textColor}` }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                style={{
                  color: `${
                    location.pathname === "/services" ? "white" : textColor
                  }`,
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/attorneys"
                style={{
                  color: `${
                    location.pathname === "/attorneys" ? "white" : textColor
                  }`,
                }}
              >
                Attorneys
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: `${
                    location.pathname === "/about" ? "white" : textColor
                  }`,
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                style={{
                  color: `${
                    location.pathname === "/contact-us" ? "white" : textColor
                  }`,
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <Sheet>
          <SheetTrigger>
            <LucideMenu size={40} className="sm:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <MobileNavBar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
