import React from 'react'
import { Link } from 'react-router'
import {PlusIcon} from "lucide-react"
const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
     <div className='mx-auto max-w-6xl p-4'>
       <div className='flex items-center justify-between'>
         <h1 className='text-3xl font-bold font-mono tracking-tight text-green-600'>
            ThinkBoard
         </h1>
         <div className='flex items-center gap-4'>
          <Link to={"/create"} className='btn btn-primary bg-green-600 border border-green-600 hover:bg-green-500 hover:border-green-500 transition-all duration-200'>
          <PlusIcon className='size-5'/>
          <span>New Note</span>
          </Link>
         </div>
       </div>
     </div>
    </header>
  )
}

export default Navbar