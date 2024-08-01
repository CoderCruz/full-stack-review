import { spiral } from 'ldrs';

spiral.register()

const Spinner = () => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-96'>
      <l-spiral
        size="150"
        speed="0.9" 
        color="black" 
      ></l-spiral>
    </div>
  )
}

export default Spinner;