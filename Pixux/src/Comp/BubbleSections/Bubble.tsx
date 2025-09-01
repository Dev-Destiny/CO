interface Props {
  text: String
}


const Bubble = ({ text }:Props) => {
  return (
    <div className="px-[1.5rem] py-[0.8rem] bg-[#f0c3c3] w-fit rounded-4xl font-medium">
      {text}
    </div>
  )
}

export default Bubble
