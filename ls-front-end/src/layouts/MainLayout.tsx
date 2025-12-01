import { Outlet } from "react-router"
import SideBar from "../components/SideBar"

function MainLayout() {
  return (
    <div className="grid grid-cols-10 relative min-h-[100vh]">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
