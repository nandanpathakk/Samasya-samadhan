import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.svg"


export default function Header() {

    const location = useLocation();
    // const isSelected = (path) => location.pathname === path;
    function isSelected(path) {
        return location.pathname === path;
    }

    return <div>
        <div className="flex justify-around items-center text-black">
            <div className=" pl-[35px] pt-[39px]">
                <Link to={"/"}>
                    <img className="w-28 h-10" src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center justify-between w-[569px] text-l font-red-hat font-medium">
                <p className={isSelected('/') ? ' text-black border-b-2 border-gray-400' : "text-black"}>
                    <Link to="/">Home</Link>
                </p>

                <p className={isSelected('/clean') ? 'text-black border-b-2 border-gray-400' : "text-black"}>
                    <Link to="/clean">Cleanliness Issue</Link>
                </p>
                <p className={isSelected('/food') ? 'text-black border-b-2  border-gray-400' : 'text-black'}>
                    <Link to="/food" >Food Issue</Link>
                </p>
                <p className={isSelected('/road') ? 'text-black border-b-2 border-gray-400' : 'text-black'}>
                    <Link to="/road" >Road Issue</Link>
                </p>
            </div>
            <div className="flex items-center justify-between w-[190px]">
                <div>
                    <CiSearch className="w-6 h-6 text-black" />
                </div>
                <Link to={"/signup"}>
                    <div>
                        <button className="border py-[3px] px-[30px] rounded-full text-[11px] font-bold text-black font-['Raleway']">Sign Up</button>
                    </div>
                </Link>

            </div>

        </div>
    </div>
}