import { Outlet } from "react-router-dom"
import { NavSystem } from "../components/nav/NavSystem"
import TitleBanner from "./TitleBanner"

function Root() {
    return (
      <>
        <TitleBanner/>
        <NavSystem/>
        <Outlet/>
      </>
    )
  }
  
  export default Root