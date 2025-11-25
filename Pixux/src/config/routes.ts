import { createBrowserRouter } from "react-router";
import Home from "../main/Pages/Home";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";

export const router = createBrowserRouter([
	{ path: "/", Component: Home },
	{ path: "/signup", Component: SignUp },
	{ path: "signin", Component: SignIn },
]);
