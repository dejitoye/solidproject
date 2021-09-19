import React from "react";
import fb from "../images/fb-logo.png";
import fb1 from "../images/avt.jpg";
import fb2 from "../images/fb-logo-mb.png";
import { searchLogo } from "../IconsFile";
import { menu } from "../IconsFile";
import { trend } from "../IconsFile";
import { shop } from "../IconsFile";
import { inbox } from "../IconsFile";
import {
  BellIcon,
  InboxIcon,
  LightBulbIcon,
  MoonIcon,
  SearchCircleIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Search from "./forms/Search";
import Menu from "./forms/Menu";
import blankpic from "../images/blankpic.png";
import useDarkMode from "hooks/useDarkMode";
import { useDispatch, useSelector } from "react-redux";
// import 'boxicons';
function Navbar() {
  // console.log(fb)
  const [colorTheme, setTheme] = useDarkMode();
  const state = useSelector(state => state.userSession.login)
  const dispatch = useDispatch()
  console.log(state)

  const session = ()=>{
    dispatch({type:"SIGNIN"})
  }
  return (
    <div className=" z-10 bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
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
          <MoonIcon className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 " />
          {/* {menu1} */}

          <Menu />
        </div>

        {/* <Menu/> */}
      </div>

      {/* end of left nav */}

      { state&& <div className=" flex items-center  justify-start space-x-16  hidden lg:inline-flex mr-20 ">
        {/* <div className="border-b-2 border-blue-600 hover:bg-blue-200">
          {trend2}
        </div> */}
        <div className="border-b-2 border-blue-600">
          <ShoppingCartIcon className="h-8 w-8" />
        </div>
        <div className="border-b-2 border-blue-600">
          <UserGroupIcon className="h-8 w-8" />
        </div>
        <div className="border-b-2 border-blue-600">
          <InboxIcon className="h-8 w-8" />
        </div>
      </div>}
      {/* end of 2nd middle nav  */}
      <div className=" flex justify-end items-center space-x-6 px-2 hidden md:inline-flex">
      { state&&
        <Link
          to="/"
          class="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
        >
          <img
            src={blankpic}
            alt="Profile picture"
            className="rounded-full h-10 w-10"
          />
          <span className="mx-2 font-semibold dark:text-dark-txt">deji</span>
        </Link>}
      { state&& <div className="relative bg-gray-100 rounded-full p-1 hover:bg-gray-200">
          <div>
            <BellIcon className="h-8 w-8" />
          </div>
          <span className="absolute right-0.5 top-0  bg-red-500 text-white font-semibold rounded-full px-1 text-center text-xs text-right ">
            8+
          </span>
        </div> 
}
     { !state ?   <Link className="link" to="/signin">
          <button className=" btnNav">Log In</button>
        </Link> : <button className=" btnNav"onClick={()=>{dispatch({type:"LOGOUT"})}}>Sign Out</button> }

        { !state && <Link className="link" to="/signup">
          <button className=" btnNav" >Sign Up</button>
        </Link>}
        <div
          onClick={() => setTheme(colorTheme)}
          className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 h-10 w-10  text-green-600"
        >
          {colorTheme === "dark" ? <MoonIcon /> : <LightBulbIcon />}
        </div>
        <div className="sm:hidden lg:hidden md:inline-flex ">
          {/* {menu1} */}
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
