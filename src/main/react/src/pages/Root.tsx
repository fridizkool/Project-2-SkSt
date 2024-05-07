import { Outlet, useLoaderData } from "react-router-dom"
import { NavSystem } from "../components/nav/NavSystem"
import TitleBanner from "./TitleBanner"

function Root() {
  const navOptions = useLoaderData() as NavOptions;

  return (
    <>
      <div className="sticky top-0 left-0 z-50 bg-gradient-to-br from-slate-400 to-neutral-200">
        <div className="left-0 px-4">
          <TitleBanner />
        {/* </div>
        <div className="bg-neutral-100"> */}
          <NavSystem navOptions={navOptions} enabled={true} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
