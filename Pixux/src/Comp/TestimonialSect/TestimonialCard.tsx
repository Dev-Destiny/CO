import { Star } from "lucide-react";

interface Props {
	stars: number;
	img?: string;
	message: string;
	name: string;
	position: string;
	course?: string;
}

const TestimonialCard = ({ stars, img, name, message, position, course }: Props) => {
	return (
		<div className="flex flex-col gap-5 bg-white p-5 rounded-2xl shadow-[0_0_5px_rgba(100,100,100,0.2)]">
			<div className="flex">
				{[...Array(stars)].map((_, i) => (
					<Star key={i} size={15} color="gold" fill="gold"/>
				))}
			</div>

			<p className="text-gray-500">
				{ message }
			</p>
			<div className="flex items-center gap-4">
				<div className="h-10 w-10 rounded-full overflow-hidden object-fit"><img src={img} alt="Profile" /></div>
				<div>
					<p className="font-bold">{ name }</p>
					<p className="text-gray-500 text-[12px]">{position}</p>
					<p className="text-blue-400 text-[11px]">{ course }</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
