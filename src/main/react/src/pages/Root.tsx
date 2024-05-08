import { Outlet, useLoaderData } from "react-router-dom"
import { NavSystem } from "../components/nav/NavSystem"
import TitleBanner from "./TitleBanner"

function Root() {
  const navOptions = useLoaderData() as NavOptions;

  return (
    <>
      <div className="sticky top-0 left-0 z-50 bg-base-light">
        <div className="left-0 px-4">
          <TitleBanner />
        </div>
        <div className="bg-base-lighter">
          <NavSystem navOptions={navOptions} enabled={true} />
        </div>
      </div>
      <div className="bg-base-lightest min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
