import { CheckCircle } from "lucide-react";

interface Props {
    text: string;
	color?: string
	width?: string
}

const Check = ({text, color="text-gray-200", width }: Props) => {
	return (
		<div>
			<div className={`flex gap-2 ${color} ${width}  items-center justify-center`}>
				<CheckCircle color='lime' size={20} />
				{ text }
			</div>
		</div>
	);
};

export default Check;
