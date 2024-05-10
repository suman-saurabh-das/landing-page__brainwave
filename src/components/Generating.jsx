import { loading } from '../assets'

const Generating = ({ className }) => {
  return (
    <div className={`bg-n-8/80 flex h-[3.5rem] items-center px-6 rounded-[1.7rem] text-base ${className || ""}`}>
      <img alt="Loading" className="h-5 mr-4 w-5 animate-spin" src={loading} />
      AI is generating
    </div>
  )
}

export default Generating;
