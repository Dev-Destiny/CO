import { Link } from "react-router";

const Logo = () => {
	return (
		<div>
			<Link to={"/"}>
				<div className='text-white font-bold  bg-blue-600 rounded-[5px]  text-[1rem] px-2 py-1 '>
					co
				</div>
			</Link>
		</div>
	);
};

export default Logo;
