import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";

const Nav = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 bg-stone-700 p-6">
        <Link to='/'>
          <div className="text-white ml-3/6 text-4xl font-black">FOOD RECIPE APP</div>
        </Link>
        <div className="flex items-center">
          <Link to='/create'>
            <MdOutlineAddBox className='text-emerald-300 h-16 w-16' />
          </Link>
          <div className="text-3xl ml-2 text-white">Create Recipe</div>
        </div>
  </div>
  )
}

export default Nav