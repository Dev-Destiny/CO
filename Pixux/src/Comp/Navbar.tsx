import "react";
import Button from "./General/Button";
import { Menu, Search } from "lucide-react";

function Navbar() {
	return (
		<section className='flex justify-between items-center px-10 py-2 mb-[2rem] border-b-1 border-b-gray-300 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)]'>
			<p className='poppins-bold logo text-gray-900 text-[2rem] font-bold flex-1'>
				co.
			</p>
			<ul className='gap-10 text-gray-500 text-[0.9rem] flex-10 justify-center sm:flex hidden'>
				<li className='relative'>Courses</li>
				<li className='relative'>How it works</li>
				<li className='relative'>Reviews</li>
				<li className='relative'>About</li>
			</ul>
			<div className='flex gap-2 items-center'>
				{/* <img src="Search-icon.svg" alt="" /> */}
				<Button text={"Sign in"} type={"ghost"}/>
				<Button text={"Get Started"} type={"primary"}/>
				<Menu className='sm:hidden flex' />
			</div>
		</section>
	);
}

export default Navbar;
