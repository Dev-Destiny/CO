import * as Icons from "lucide-react";
import type React from "react";

interface Props {
    icon: keyof typeof Icons;
    text?: string
}

function ContinueWith({icon, text}:Props) {
    const IconComponent = Icons[icon] as React.FC<React.SVGProps<SVGSVGElement>>
	return (
		<div>
			<button className="w-full p-2 border-1 border-gray-300 rounded-[8px] flex gap-2 justify-center text-[14px] hover:bg-gray-200">
                <IconComponent className="h-5 text-gray-500"/>
                {text}
            </button>
		</div>
	);
}

export default ContinueWith;
