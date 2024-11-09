import React from 'react'
import logo from '../images/logo.png'
import send from '../icons/send.svg'
import f1 from '../icons/f1.svg'
import f2 from "../icons/f2.svg";
import f3 from "../icons/f3.svg";
import f4 from "../icons/f4.svg";
import f5 from "../icons/f5.svg";
import f6 from "../icons/f6.svg";

function Foter() {
  return (
    <>
      <section className="bg-[#101017] mt-10 md:mt-16 lg:mt-24 py-10 md:py-16 lg:py-20">
        <div className="cus-container">
          <div className="grid-res-cols items-start">
            <div className="grid-card-4">
              <img src={logo} alt="" />
              <p className="para-text mt-3 md:w-[242px]">
                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis
                non, fugit totam vel laboriosam vitae.
              </p>
            </div>
            <div className="grid-card-4">
              <h4 className="text-[18px] font-bold font-urbanist text-white">
                My Account
              </h4>
              <ul className="mt-3">
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Authors
                  </a>
                </li>
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Collection
                  </a>
                </li>
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Author Profile
                  </a>
                </li>
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Create Collection
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid-card-4">
              <h4 className="text-[18px] font-bold font-urbanist text-white">
                Resources
              </h4>
              <ul className="#8A8AA0 mt-3">
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Live Auctions
                  </a>
                </li>
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Item Details
                  </a>
                </li>
                <li>
                  <a
                    className="text-[14px] font-urbanist text-[#66669C] hover:text-[#8787bd]"
                    href="#"
                  >
                    Activity
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid-card-4">
              <h4 className="text-[18px] font-bold font-urbanist text-white">
                Subscribe Us
              </h4>
              <div className="relative w-fit mt-3">
                <input
                  className=" border-[#343444] bg-transparent rounded-[10px] w-[311px] px-3 placeholder:text-[#8A8AA0] h-[56px] text-[#8A8AA0] focus:ring-0  focus:border-[#343444] "
                  type="email"
                  placeholder="Info@yourgmail.com"
                />
                <img className="absolute right-0 top-0" src={send} alt="" />
              </div>
              <div className="flex space-x-3 mt-5">
                <img src={f1} alt="" />
                <img src={f2} alt="" />
                <img src={f3} alt="" />
                <img src={f4} alt="" />
                <img src={f5} alt="" />
                <img src={f6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Foter
