import { IceCream2Icon } from "lucide-react";
import Button from "../components/General/Button";
import { useNavigate } from "react-router";

function NotFoundPage() {
    const navigate = useNavigate()
	return (
		<div className='h-[90vh] pad'>
			<div className='container rounded-2xl py-10 px-5 flex justify-center mt-50 flex-col lg:items-center gap-5 '>
                <IceCream2Icon size={40}/>
                <h1 className="text-6xl text-secondary font-mono">404 - Not Found</h1>
				<h1 className="text- text-4xl lg:text-center">Looks like the page you're looking for doesn't exist</h1>
                
                <Button size="lg" onClick={() => navigate(-1)}>Return To last Page</Button>


			</div>
		</div>
	);
}

export default NotFoundPage;
