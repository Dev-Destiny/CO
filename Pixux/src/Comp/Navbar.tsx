import "react";
import Button from "./General/Button";
import { Menu, Search } from "lucide-react";

function Navbar() {
	return (
		<section className='flex justify-between items-center px-10 py-2 mb-[2rem]'>
			<p className='poppins-bold logo text-gray-900 text-[2rem] font-bold flex-1'>
				co.
			</p>
			<ul className='gap-10 text-gray-500 text-[0.9rem] flex-10 justify-center sm:flex hidden'>
				<li className='relative'>Home</li>
				<li className='relative'>About</li>
				<li className='relative'>Blog</li>
				<li className='relative'>Resources</li>
			</ul>
			<div className='flex gap-5 items-center'>
				{/* <img src="Search-icon.svg" alt="" /> */}
				<Search size={20} />
				<Button text={"Sign Up"} type={"type1"} />
				<Menu className='sm:hidden flex' />
			</div>
		</section>
	);
}

export default Navbar;
