
interface Props {
    quant: string
    desc: string
}

const Stats = ({ quant, desc }:Props) => {
  return (
    <div className="text-center">
        <h2 className='font-bold text-3xl text-blue-700'>
            {quant}
        </h2>
        <p className='text-gray-500 text-[12px]'>
            {desc}
        </p>
    </div>
  )
}

export default Stats
