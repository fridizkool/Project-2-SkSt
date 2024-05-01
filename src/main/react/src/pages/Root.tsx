import { Outlet, useLoaderData } from "react-router-dom"
import { NavSystem } from "../components/nav/NavSystem"
import TitleBanner from "./TitleBanner"

function Root() {
  const navOptions = useLoaderData() as NavOptions;

  return (
    <>
      <TitleBanner />
      <NavSystem navOptions={navOptions} />
      <Outlet />
    </>
  );
}

export default Root;
