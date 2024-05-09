import { Outlet, useLoaderData } from "react-router-dom"
import { NavSystem } from "../components/nav/NavSystem"
import TitleBanner from "./TitleBanner"

function Root() {
  const navOptions = useLoaderData() as NavOptions;

  return (
    <>
      <div className="sticky top-0 z-50 px-3 bg-base-lighter">
        <TitleBanner />
        <NavSystem navOptions={navOptions} enabled={true} />
      </div>
      <div className="bg-base-lightest min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
