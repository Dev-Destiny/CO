import { createBrowserRouter, Outlet } from "react-router";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import LandingPage from "../pages/LandingPage";
import ProtectedRoute from "../utils/ProtectedRoute";
import Dashboard from "../pages/main/Dashboard";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../pages/NotFoundPage";

function Modules({ children }: { children?: any }) {
	return <div>{children ? children : <Outlet />}</div>;
}

export const router = createBrowserRouter([
	// { path: "/", Component: LandingPage },
	// { path: "/signup", Component: SignUp },
	// { path: "signin", Component: SignIn },

	{
		element: <Modules />,
		children: [
			{
				index: true,
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "auth",
				element: <AuthLayout/>,
				children: [
					{
						index: true,
						// path: "login",
						element: <SignIn />,
					},
					{
						path: "signup",
						element: <SignUp />,
					},
				],
			},
			{
				path: "dashboard",
				element: (
					<ProtectedRoute>
						<MainLayout />
					</ProtectedRoute>
				),
				children: [
					{
						index: true,
						element: <Dashboard />,
					},
				],
			},
		],
	},
	{
		path: "*",
		Component: NotFoundPage
	},
]);
