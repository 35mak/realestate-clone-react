import React from 'react'
import {FaGooglePlusG} from "react-icons/fa"

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-white border-gray-800 hover:bg-red-900 px-7 py-3 hover:text-white uppercase rounded text-sm font-medium active:bg-red-950 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out '>
        <FaGooglePlusG className='text-2xl rounded-full ml-2' />
        الدخول بإستخدام جوجل
    </button>
  );
}
