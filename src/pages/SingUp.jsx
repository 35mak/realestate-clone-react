import React, { useState } from 'react';
import {VscEyeClosed,VscEye} from "react-icons/vsc";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import{getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {db} from "../firebase";
import { doc, serverTimestamp, setDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

export default function SingUp() {
    const [showPassword,setShowPassword]=useState(false);
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
    });
    const{name,email,password}=formData;
    const navigate = useNavigate();
    function onChange(e){
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value,
        }));
    }
    async function onSubmit(e){
     e.preventDefault();
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        updateProfile(auth.currentUser,{
            displayName: name,
        });
        const user = userCredential.user;
        const formDataCopy={...formData};
        delete formDataCopy.password;
        formDataCopy.timestamp =serverTimestamp();


        await setDoc(doc( db ,"users", user.uid), formDataCopy);
      //  toast.success("تم التسجيل بنجاح");
        //navigate("/");
       
    } catch (error) {
        toast.error("هناك خطأ ما في التسجيل");
    }
    }
  return (
<section>
    <h1 className='text-3xl text-center mt-6 font-bold text-blue-900 '>مستخدم جديد </h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-12 '>
            <img src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='key' className='w-[95%] rounded-full ' />
        </div>
        <div className='w-[85%] md:w-[67%] lg:w-[40%] lg:ml-16'>
            <form onSubmit={onSubmit} >
            <input type="text" id='name' value={name} onChange={onChange} placeholder="الإسم كامل"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 rounded transition ease-in-out"/>
                <input type="email" id='email' value={email} onChange={onChange} placeholder="البريد الإلكتروني"
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 rounded transition ease-in-out"/>
                <div className='relative mb-6 '>
                <input type={showPassword? "text":"password"} id='password' value={password} onChange={onChange} placeholder="كلمة المرور"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 rounded transition ease-in-out"/>
                {showPassword ? (
                    <VscEyeClosed  className='absolute left-4 top-1 text-4xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
                ):<VscEye className='absolute left-4 top-1 text-4xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>}
                </div>
                <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                    <p className='mb-6 '> تمتلك حساب؟
                        <Link to="/sing-in" className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out mr-1'>تسجيل الدخول </Link>
                    </p>
                    <p>
                        <Link to="/forgot-password" className='text-red-600 hover:text-red-900 transition duration-200 ease-in-out mr-1'>هل نسيت كلمة المرور؟</Link>
                    </p>
                </div>
                <button className='w-full bg-slate-600 hover:bg-gray-800 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg active:bg-gray-900' type='submit'>مستخدم جديد</button>
            <div className='flex items-center my-4 before:border-t  before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300'> 
                <p className='text-center font-semibold mx-4'>او</p>
            </div>
            <OAuth/>
            </form>

        </div>
    </div>
</section>
    );
}
