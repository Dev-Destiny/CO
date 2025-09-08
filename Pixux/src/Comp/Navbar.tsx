import "react";
import Button from "./General/Button";
import { Menu } from "lucide-react";

function Navbar() {
	return (
		<section className='z-20 px-5 py-2 mb-[2rem] border-b-1 border-b-gray-300 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)]'>
			<div className="max-w-[1000px] mx-auto flex justify-between items-center">
				<div className="flex items-center  gap-2 flex-1">
					<div className="text-white font-bold  bg-blue-600 rounded-[5px]  text-[1rem] px-2 py-1 ">co</div>
					<p className='poppins-bold logo text-gray-900 text-[1.5rem] font-bold'>
						CO
					</p>
				</div>
				<ul className='gap-10 text-gray-500 text-[0.8rem] flex-10 justify-center sm:flex hidden'>
					<li className='relative'>Courses</li>
					<li className='relative'>How it works</li>
					<li className='relative'>Reviews</li>
					<li className='relative'>About</li>
				</ul>
				<div className='flex gap-2 items-center'>
					{/* <img src="Search-icon.svg" alt="" /> */}
					<div className="hidden sm:flex"><Button size="fit" text={"Sign in"} type={"ghost"}/></div>
					<Button text={"Get Started"} type={"primary"}/>
					<Menu className='sm:hidden flex' />
				</div>
			</div>
				
		</section>
	);
}

export default Navbar;
