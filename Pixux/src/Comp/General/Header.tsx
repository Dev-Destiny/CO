interface Props {
    text:string
}

const Header = ({ text }:Props) => {
  return (
    <div>
      <h1 className="poppins-regular text-[2.3rem] text-center">{ text }</h1>
    </div>
  )
}

export default Header
