import { Outlet, useLoaderData } from "react-router-dom"
import { NavSystem } from "../components/nav/NavSystem"
import TitleBanner from "./TitleBanner"

function Root() {
  const navOptions = useLoaderData() as NavOptions;

  return (
    <>
      <div className="sticky top-0 left-0 z-50 bg-gradient-to-br from-slate-400 to-neutral-200 shadow-xl">
        <div className="left-0 px-4">
          <TitleBanner />
          <NavSystem navOptions={navOptions} enabled={true} />
        </div>
      </div>
      <div className="box-decoration-slice slate-400 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
