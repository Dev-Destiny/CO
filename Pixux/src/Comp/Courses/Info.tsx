import React from "react";
import * as LucideIcons from "lucide-react";

interface Props {
	icon: keyof typeof LucideIcons;
	text: String;
}

const Info = ({ icon, text }: Props) => {
	const Icon = LucideIcons[icon] as React.FC<React.SVGProps<SVGSVGElement>>;

	return (
		<div className="flex gap-1 text-[12px]">
			<Icon className="h-5" />
			{text}
		</div>
	);
};

export default Info;
