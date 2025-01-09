import CallUsNow from "@/components/call-us-now";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>
      <Outlet />

      {/* section: Call us now*/}
      <CallUsNow />

      {/* section: Footer*/}
      <Footer />

      {/* section: overlayer*/}
      <div id="overlayer" style={{ display: "none" }}></div>

      {/* section: loader*/}
      <div className="loader" style={{ display: "none" }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <Toaster />
    </>
  );
}
