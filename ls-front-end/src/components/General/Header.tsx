interface Props {
    title: string,
    text?: string
}

const Header = ({ title, text }:Props) => {
  return (
    <div className="text-center mb-10">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl  text-center mb-3">{ title }</h1>
      <p className="text-text-muted">{ text }</p>
    </div>
  )
}

export default Header
