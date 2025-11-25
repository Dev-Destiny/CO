import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Logo from "./General/Logo";
import { footerLists } from "../main/lib/constants";

function Footer() {
	return (
		<div className='bg-gray-900 w-full py-10'>
			<div className='max-w-[1000px] mx-auto px-10'>
				<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-20 border-b-1 border-gray-700 pb-10 mb-10'>
					<div className='text-gray-400 flex flex-col gap-4'>
						<div className='text-white flex items-center font-bold gap-2 text-[1.2rem]'>
							<Logo />
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

					{footerLists.map((fList, index) => (
						<FooterList
							key={index}
							head={fList.head}
							linkList={fList.linkList}
						/>
					))}
				</div>
				<div className='text-gray-400 text-[14px] flex justify-between flex-col lg:flex-row md:flex-row items-center'>
					<p>&copy; 2025 CO. All rights reserved.</p>
					<p>Made with ❤️ for developers worldwide</p>
				</div>
			</div>
		</div>
	);
}







const FooterList = ({
	head,
	linkList,
}: {
	head: string;
	linkList: string[];
}) => {
	return (
		<div>
			<h2 className='text-white mb-5 font-semibold'>{head}</h2>
			<div className='flex flex-col gap-1.5'>
				{linkList.map((link, i) => (
					<p
						key={i}
						className='text-[14px] text-gray-300 hover:text-white cursor-pointer list- duration-200'
					>
						{link}
					</p>
				))}
			</div>
		</div>
	);
};

export default Footer;
