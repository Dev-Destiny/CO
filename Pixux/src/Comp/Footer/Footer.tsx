import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import FooterList from "./FooterList";
import Logo from "../General/Logo";

const Footer = () => {
	return (
		<div className='bg-gray-900 w-full py-10'>
			<div className='max-w-[1000px] mx-auto px-10'>
				<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-20 border-b-1 border-gray-700 pb-10 mb-10'>
					<div className='text-gray-400 flex flex-col gap-4'>
						<div className='text-white flex items-center font-bold gap-2 text-[1.2rem]'>
							<Logo/>
							CO
						</div>
						<p className='text-[12px]'>
							Interactive programming education for the next
							generation of developers.
						</p>
						<div className='flex gap-4 '>
							<Twitter />
							<Github />
							<Linkedin />
							<Mail />
						</div>
					</div>

					<FooterList
						head='Courses'
						linkList={[
							"Python Fundamentals",
							"JavaScript Mastery",
							"React Development",
							"API Development",
							"Data Structures",
						]}
					/>
					<FooterList
						head='Company'
						linkList={[
							"About Us",
							"Careers",
							"Press",
							"Blog",
							"Partners",
						]}
					/>
					<FooterList
						head='Support'
						linkList={[
							"Help Center",
							"Contact Us",
							"Privacy Policy",
							"Terms of Service",
							"Refund Policy",
						]}
					/>
				</div>
                <div className="text-gray-400 text-[14px] flex justify-between flex-col lg:flex-row md:flex-row items-center">
                    <p>&copy; 2025 CO. All rights reserved.</p>
                    <p>Made with ❤️ for developers worldwide</p>
                </div>
			</div>
		</div>
	);
};

export default Footer;
