import React from "react";
import Svg1 from "../assets/navbar-svg-1.jsx";
import Svg2 from "../assets/navbar-svg-2.jsx";
import Svg3 from "../assets/navbar-svg-3.jsx";
import Svg4 from "../assets/navbar-svg-4.jsx";
import Svg5 from "../assets/navbar-svg-5.jsx";

const Navbar = () => {
  return (
    // <nav className="navbar">
    //   <div className="navbar-logo">
    //     <Lk to="/"><img src={Logo} alt='logo' className='logo'/></Lk>
    //   </div>
    //   <div className="navbar-search">
    //     <input type="text" placeholder="Search..." />
    //   </div>
    //   <div className="navbar-Lks">
    //     <Lk to="/login"><button type='submit' /></Lk>
    //     <Lk to="/profile"><img src={profileImage} alt="Profile" className='profile-img'/></Lk>
    //   </div>
    // </nav>
    <nav className="bg-white w-full flex fixed justify-between items-center mx-auto px-8 h-20 border-b-2 border-black shadow-md z-20">
      <div className="inline-flex">
        <a className="_o6689fn" href="/">
          <div className="flex justify-center items-center">
            <Svg1 />
            <span className="ml-2 text-2xl font-bold font-mono">Social Sphere</span>
          </div>
          <div className="block md:hidden">
            <Svg2 />
          </div>
        </a>
      </div>
      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <div className="inline-flex items-center max-w-full">
            <div className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-96 border rounded-full px-1  py-1">
              <input
                type="text"
                placeholder="Search..."
                className="block flex-grow flex-shrink overflow-hidden border-none focus:ring-0"
              />
              <div
                className="flex items-center justify-center relative  h-8 w-8 rounded-full"
                // onClick={search}
              >
                <Svg3 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                <a href="/signin">Login / Logout</a>
              </div>
            </a>
          </div>

          <div className="block">
            <div className="inline relative">
              <button
                type="button"
                className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
              >
                <div
                  className="pl-1"
                  // onClick={openSideBar}
                >
                  <Svg4 />
                </div>

                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                  <a href="/profile">
                    <Svg5 />
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
