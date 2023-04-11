import React from 'react'
import { useLocation ,useNavigate } from 'react-router-dom'

export default function Header() {
    const location= useLocation();
    const navigate=useNavigate();

    function pathMathRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div className='flex items-center' >
            <img src="https://img.icons8.com/clouds/256/home-page.png"alt='logo' className='h-14 cursor-pointer ' onClick={()=>navigate("/")} />
            <h1 className={`text-red-500`} >سوق  </h1>
            <h1 className={`text-blue-700`} >العقارات الذكي</h1>
            </div>
            
            <div>
                <ul className='flex space-x-10 '>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") &&"text-black border-b-red-500"}`} onClick={()=>navigate("/")}>  الصفحة الرئيسية </li>
                    <li></li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers") &&"text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>  العروض </li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sing-in") &&"text-black border-b-red-500"}`}onClick={()=>navigate("/sing-in")}> تسجيل الدخول</li>

                </ul>
            </div>

        
        </header>
    </div>
  )
}
