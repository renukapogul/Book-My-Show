import React from "react";
import {BiChevronRight , BiSearch, BiMenu, BiChevronDown }  from "react-icons/bi";

const NavSm = () => {
    return (
    <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text x1 font-bold">
                    It All Starts Here!
                </h3>
                <span className="text-gray-400 text-xs flex items-center">Bengaluru  <BiChevronRight/>
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>

        </div>
    </>
    );
};

const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
                <BiSearch />
                <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Search for movies, events, place, sports and activities"/>
            </div>
        </>
    )
};

const NavLg = () => {
    return(
        <>
    
            <div className="container mx-auto px-4 flex items center  justify-between">
                <div className="flex items-center w-1/2 gap-3" >
                    <div className="w-12 h-12">
                    <img
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
                        <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                        placeholder="Search for movies, events, place, sports and activities"/>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-200 hover:text-white cursor-pointer text-xs flex items-center">Bengaluru  <BiChevronDown/>
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>

            </div>
        </>
    )

};

const Navbar = () =>{
    return (
    <>
        <nav className="bg-bms-700 p-3">
            <div className="md:hidden">
                {/*small Scrren */}
                <NavSm/>
            </div>

            <div className="hidden md:flex lg:hidden">
                {/*medium devices */}
                <NavMd/>
            </div>

            <div className="hidden lg:flex">
                {/*Large Screen */}
                <NavLg/>
            </div>

        </nav>
    
    </>
    );
};

export default Navbar;
