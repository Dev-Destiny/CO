import { LogOut } from "lucide-react"
import Logo from "./General/Logo"

function SideBar() {
  return (
    <div className="h-full sticky col-span-2 bg-bg-light">
      <div className="py-10 pl-7">
        <Logo/> 
        <div className="flex gap-4 mt-10 items-center">
            <LogOut/>
            <p className="text-sm font-bold">LOGOUT</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
