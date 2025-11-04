import "react";
import Button from "./General/Button";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import Logo from "./General/Logo";

function Navbar() {
	const links = [
		{ path: "/", label: "Courses" },
		{ path: "/", label: "How it works" },
		{ path: "/", label: "Reviews" },
		{ path: "/", label: "About" },
	];

	return (
		<section className='z-20 px-10 py-2 mb-[2rem] border-b-1 border-b-gray-300 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)]'>
			<div className='max-w-[1000px] mx-auto flex justify-between items-center'>
				<div className='flex items-center  gap-2 flex-1'>
					<Logo />
					<p className='poppins-bold logo text-gray-900 text-[1.5rem] font-bold'>
						CO
					</p>
				</div>
				<ul className='gap-10 text-gray-500 text-[0.8rem] flex-10 justify-center sm:flex hidden'>
					{links.map((link, i) => (
						<Link to={link.path} key={i}>
							<li className='relative'>{link.label}</li>
						</Link>
					))}
				</ul>
				<div className='flex gap-2 items-center'>
					{/* <img src="Search-icon.svg" alt="" /> */}
					<div className='hidden sm:flex'>
						<Link to={"/signin"}>
							<Button size='fit' type={"ghost"} >Sign in</Button>
						</Link>
					</div>
					<Link to={"/signup"}>
						<Button type={"primary"}>Get Started</Button>
					</Link>
					<Menu className='sm:hidden flex' />
				</div>
			</div>
		</section>
	);
}

export default Navbar;
