import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const Card = ({title, author, ingredients, instructions, id}) => {
  return (
    <div className="flex justify-start flex-col box-border border-4 p-6 shadow-2xl w-full max-w-96 aspect-square">
      <div className="text-3xl font-bold text-cyan-700">{title}</div>
      <div className="text-stone-400 text-lg mt-1">Posted by: {author}</div>
      <div className="text-zinc-500 text-lg mt-1">{ingredients}</div>
      <div className="break-all	overflow-y-auto text-balance text-pretty text-xl my-4 h-3/6 text-wrap">{instructions}</div>
      <div className="w-full flex justify-end">
        <Link to={`/recipes/edit/${id}`}>
          <MdOutlineModeEditOutline className="text-amber-300 h-8 w-8 mr-4"/>
        </Link>
        <Link to={`/recipes/delete/${id}`}>
          <RiDeleteBin6Line className="text-rose-700 h-8 w-8"/>
        </Link>
      </div>
    </div>
  )
}

export default Card