import { Outlet } from "react-router"
import SideBar from "../components/SideBar"

function MainLayout() {
  return (
    <div>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
