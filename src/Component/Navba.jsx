import React, { useState } from 'react'
import logo from '../images/logo.png'
import search from '../icons/search.svg'
import user from '../icons/user.svg'
import menu from '../icons/MenuOutline.svg'
import x from '../icons/X.svg'


function Navba() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false);
 
  return (
    <>
      <section className="relative">
        <div className="cus-container">
          <div className="flex justify-between items-center py-5">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="">
              <ul
                className={`lg:flex lg:space-x-4 bg-[#25253B]  lg:bg-transparent p-12 lg:p-0 space-y-4 lg:space-y-0 max-lg:absolute top-0 right-0 z-20 ${
                  open ? "" : "hidden"
                }`}
              >
                <img
                  onClick={() => setOpen(false)}
                  className="lg:hidden"
                  src={x}
                  alt=""
                />
                <li className="text-white font-urbanist font-medium hover:opacity-60">
                  <a href="#">Home</a>
                </li>
                <li className="text-white font-urbanist font-medium hover:opacity-60">
                  <a href="#">Explore</a>
                </li>
                <li className="text-white font-urbanist font-medium hover:opacity-60">
                  <a href="#">Community</a>
                </li>
                <li className="text-white font-urbanist font-medium hover:opacity-60">
                  <a href="#">Pages</a>
                </li>
                <li className="text-white font-urbanist font-medium hover:opacity-60">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="btn">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    className={`input text-white outline-none focus:ring-[#66669C]  border-none pl-8  lg:block ${
                      show ? "w-40 md:w-60" : "hidden"
                    }`}
                    type="text"
                    placeholder="Search"
                  />
                  <img className="absolute top-3 left-2" src={search} alt="" />
                </div>
                <img
                  onClick={() => setShow(true)}
                  className={`lg:hidden ${show ? "hidden" : ""}`}
                  src={search}
                  alt=""
                />
                <img src={user} alt="" />
                <img
                  onClick={() => setOpen(true)}
                  className="lg:hidden"
                  src={menu}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navba
