import { Link } from "react-router";

const Logo = () => {
	return (
		<div>
			<Link to={"/"}>
				<div className='text-text font-bold font-mono text-2xl '>
					LearnScape
				</div>
			</Link>
		</div>
	);
};

export default Logo;
