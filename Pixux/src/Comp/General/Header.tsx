interface Props {
    title: string,
    text?: string
}

const Header = ({ title, text }:Props) => {
  return (
    <div className="text-center mb-10">
      <h1 className="font-bold text-[2.3rem] text-center mb-3">{ title }</h1>
      <p className="text-gray-500">{ text }</p>
    </div>
  )
}

export default Header
