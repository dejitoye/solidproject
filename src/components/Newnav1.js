import React from "react";
import { Link } from "react-router-dom";
import Search from "./forms/Search";
import {
  darkmoon,
  group,
  menu1,
  message,
  notificaton,
  trend2,
} from "../IconsFile";
import { shop } from "../IconsFile";
import { shop2 } from "../IconsFile";
import { ShopOutlined } from "@ant-design/icons";
import fb1 from "../images/avt.jpg"
import blankpic from "../images/blankpic.png"
import Menu from "./forms/Menu";
import useDarkMode from "hooks/useDarkMode";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/outline";

function Newnav1() {
  const [colorTheme,setTheme] = useDarkMode()
  return (
    <div className="bg-gray-200 shadow-lg flex max-h-28 flex-col  md:flex-row  p-1 justify-between  md:w-screen fixed xs:w-full dark:bg-gray-800 ">
      <div className="flex justify-between items-center p-2 space-x-2">
        <Link to="/" className=" hidden lg:inline-block ">
          <div className="font-extrabold text-blue-700 text-lg ">
            Discussion
          </div>
        </Link>

        <Link to="/" className="inline-block lg:hidden">
          <div className="font-extrabold text-blue-700 text-lg mr-3">D</div>
        </Link>
        <div>
          <Search />
        </div>
        <div className=" flex items-center md:hidden space-x-2">
          {/* add same function to both dark moon higher screen and mobile */}
          {/* <div className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 ">{darkmoon}</div> */}
          <MoonIcon className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 "/>
          {/* {menu1} */}

          <Menu/>
        </div>
        
        {/* <Menu/> */}
      </div>

      {/* end of left nav */}

      <div className=" flex items-center  justify-start space-x-16  hidden lg:inline-flex mr-20 ">
        <div className="border-b-2 border-blue-600 hover:bg-blue-200">
          {trend2}
        </div>
        <div className="border-b-2 border-blue-600">{shop2}</div>
        <div className="border-b-2 border-blue-600">{group}</div>
        <div className="border-b-2 border-blue-600">{message}</div>
      </div>
      {/* end of 2nd middle nav  */}
      <div className=" flex justify-end items-center space-x-6 px-2 hidden md:inline-flex">
        <div className="md:hidden"> latest news</div>
        <Link
          to="/"
          class="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
        >
          <img src={blankpic} alt="Profile picture" className="rounded-full h-10 w-10" />
          <span className="mx-2 font-semibold dark:text-dark-txt">deji</span>
        </Link>
        <div className="relative bg-gray-100 rounded-full p-1 hover:bg-gray-200">
          <div>{notificaton}</div>
          <span className="absolute right-0.5 top-0  bg-red-500 text-white font-semibold rounded-full px-1 text-center text-xs text-right ">
            8+
          </span>
        </div>
        {/* <div className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 mr-9">{darkmoon}</div> */}
        <div onClick={()=>setTheme(colorTheme)} className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 h-10 w-10  text-green-600">
        {colorTheme==="dark"? <MoonIcon/>:<LightBulbIcon/>}</div>
        <div className="sm:hidden lg:hidden md:inline-flex ">
          
            
             {/* {menu1} */}
             <Menu/>
             </div>
       
      </div>
    </div>
  );
}

export default Newnav1;
