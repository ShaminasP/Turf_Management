import React from 'react'
import {Link} from 'react-router-dom'
import img from '../../../assets/home.png'
import Button from '../Button/Button'
function Body() {
  return (
    <div className="flex justify-evenly items-end bg-indigo-900 p-10 md:p-24 w-full h-screen lg:flex-wrap flex-wrap-reverse">
    <div className='md:w-[65%] lg:w-[37%] xl:w-[30%] mt-5 lg:mt-8'>
        <h1 className='text-5xl text-white  font-extrabold'>BOOK YOUR SPOT  PLAY YOUR SPORT</h1>
        <div className='flex w-full  lg:justify-between justify-evenly flex-wrap pt-5 lg:pt-8'>
          <Link to="/view_turf">
          <Button  color={'bg-green-500'}>BOOK YOUR SPOT</Button> 
          </Link>
          <Link to="/turf">
          <Button color={'bg-yellow-400'}>REGISTER YOUR SPOT </Button>
          </Link>
        </div>
    </div>
    <div className='mt-[100px] md:mt-0'>
        <img className='w-[600px]' src={img} />
    </div>
</div>
  )
}

export default Body