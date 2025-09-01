interface Props {
    src: string
}

const HeroImg = ({ src }: Props) => {
  return (
    <div>
      <img src={src} alt="" className="hidden sm:inline-block"/>
    </div>
  )
}

export default HeroImg
