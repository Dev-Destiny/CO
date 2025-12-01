import { Outlet } from "react-router";
import { Toaster } from "sonner";

function AuthLayout() {
	return (
		<div>
            <Toaster position="top-center" richColors/>
			<Outlet />
		</div>
	);
}

export default AuthLayout;
