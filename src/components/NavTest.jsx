import { BellIcon, ChevronDoubleLeftIcon, MailIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './forms/SearchForm'

function NavTest() {
    const [state, setstate] = useState(false)
    const [word,setWord] =useState ("")
    const [ddd, setddd] = useState(true)
    
const addinput =(e)=>{
    setWord(e.target.value)
    console.log(word)
}

const back =()=>{
    setstate(false)
    setddd(true)  
    setWord("")
}
    const search = ()=>{
     
            setstate(true)
            setddd(false)
          
           
    }

    return (
        <div className="bg-gray-200 shadow-lg flex max-h-28 flex-col  md:flex-row  justify-between  md:w-screen fixed xs:w-full dark:bg-gray-800">
         <div className="flex p-4  justify-between items-center">
             <div className="flex justify-between items-center p-1 space-x-2">
             <Link to="/" className=" hidden lg:inline-block ">
          <span className="font-extrabold text-blue-700 text-lg ">
            Discussion
          </span>
        </Link>
        <Link to="/" className="inline-block lg:hidden">
          <div className="font-extrabold text-blue-700 text-lg mr-3">D</div>
        </Link>
                 <div className="hidden md:inline-flex  md:items-center  bg-gray-100 outline-none rounded-full p-1">
                 <SearchCircleIcon  onClick={()=>console.log("clikedddddddd")} className="h-6 w-6"/>
                 {/* <input type="text" /> */}
                 <SearchForm addinput={addinput} word = {word}/>
                 </div>
                 <div className="flex">
                {  state && <ChevronDoubleLeftIcon onClick={back} className="h-6 w-6 md:hidden "/>}
               {/* { state&& <input onChange ={addinput} value={word} type="text" className="md:hidden w-72" />} */}
               { state&& <SearchForm addinput={addinput} word = {word}/>}
                 {/* <h1>hhhhhhhhhhhhh</h1> */}
               
                {ddd && <SearchCircleIcon onClick={search} className="h-6 w-6 md:hidden "/>}
                 </div>
             </div>
          {  ddd && <div className="flex  bg-gray-100 justify-between"> 
                 <div> 2ND </div>
                 <div> 2ND </div>
                 <div> 2ND </div>
             </div>
}
             <div className="flex space-x-2 "> 
               <BellIcon className="w-6 h-6"/>
               <MailIcon className="w-6 h-6"/>
                 <div> 2ND </div>
             </div>
             </div> 
        </div>
    )
}

export default NavTest
