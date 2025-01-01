import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
