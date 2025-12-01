import { Navigate } from "react-router"
import type { JSX } from "react"

function ProtectedRoute({children}:{children: JSX.Element}) {
    const user = true

  return user ? children : <Navigate to={""} replace/>
}

export default ProtectedRoute
