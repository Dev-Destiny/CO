import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './base.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import SignUp from './Pages/SignUpAndIn/SignUp'
import SignIn from './Pages/SignUpAndIn/SignIn'



const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/signup", element: <SignUp/>},
  {path: "signin", element: <SignIn/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
