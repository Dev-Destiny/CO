import Info from "./Info"
import Button from "../General/Button"
import Tag from "./Tag"

interface Props {
    name: string,
    about: string,
    img: string,
    duration: string,
    students: string,
    ratings: string,
    level: string,
    price: string
}


const CourseCard = ({ name, about, img, duration, students, ratings, level, price}:Props) => {
  return (
    <div className=" rounded-2xl overflow-hidden border-1 border-gray-200 transition-all duration-400 group hover:shadow-[0_0_20px_rgba(100,100,100,0.2)]">
      <div className="relative overflow-hidden h-40">
        <Tag level={level} price={price}/>
        <img src={img} alt="" className="absolute object-cover z-0 group-hover:scale-110 transition-all duration-400"/>
      </div>

      <div className="flex flex-col gap-5 p-5">
        <h2 className="font-semibold text-2xl">{ name }</h2>
        <p className="text-gray-600 text-[12px]"> { about }</p>
        <div className="flex justify-between">
            <Info icon="Clock" text={duration}/>
            <Info icon="Activity" text={students}/>
            <Info icon="Star" text={ratings}/>
    
        </div>
        <Button size="full" type={"primary"} text={"View Course"}/>
      </div>
    </div>
  )
}

export default CourseCard
