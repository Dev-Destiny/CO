import Stats from "../../Comp/General/Stats"
import WhyDevsChooseCo from "./WhyDevsChooseCo"

function SignInContent() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl">Master Programming <br/> <span className="text-blue-500">The Smart Way</span></h1>
      <p className="text-gray-500">Join thousands of developers who are advancing their careers with CO's interactive learning platform.</p>

      <div className="flex gap-10">
        <Stats quant="50k+" desc="Active Learners"/>
        <Stats quant="95%" desc="Job Success Rate"/>
        <Stats quant="4.9" desc="Average Rating"/>
      </div>

      <div>
        <h1 className="font-semibold mb-5">Why developers choose CO</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
				<WhyDevsChooseCo
					icon='Code'
					head='Interactive Coding'
					text='Learn by doing with hands-on coding exercises and real-time feedback'
                    type="card"
				/>
				<WhyDevsChooseCo
					icon='Zap'
					head='Instant Progress'
					text='See your skills improve with our adaptive learning system'
                    type="card"
				/>
				<WhyDevsChooseCo
					icon='Users'
					head='Community Support'
					text='Connect with fellow learners and get help when you need it'
                    type="card"
				/>
				<WhyDevsChooseCo
					icon='Award'
					head='Earn Certificates'
					text='Complete courses and earn certificates to showcase your skills'
                    type="card"
				/>
        </div>

    </div>
    <div className="border-1 rounded-xl border-gray-200 p-5 flex justify-between w-full items-center">
        <div>
            <h1>Trusted by industry leaders</h1>
            <p className="text-gray-400 text-[12px]">Start learning today with no credit card required</p>
        </div>
        <div className="flex gap-2 items-center">
            <div className="bg-green-400 p-1 w-fit h-fit rounded-full"></div>
            <p className="text-[12px] text-gray-400">Free to start</p>
        </div>
      </div>
    </div>
  )
}

export default SignInContent
