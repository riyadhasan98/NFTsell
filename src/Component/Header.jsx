import React from 'react'
import rbg from '../images/rbg.png'
import main from '../images/cartoon.png'
import heart from '../icons/heart.svg'
import arrow from '../icons/arrow.svg'

function Header() {
  return (
    <>
      <div className="bg-[#644B88] opacity-40 h-[1px]">
        <hr />
      </div>
      <section className="mt-8 md:mt-12 lg:mt-20">
        <div className="cus-container">
          <div>
            <div className="lg:flex justify-between">
              <div className="left space-y-3 lg:mt-20 relative z-10 ">
                <p className="text-gradient text-[20px] font-bold font-urbanist text-center lg:text-left">
                  NFT MARKETPLACE
                </p>
                <h1 className="font-bold font-urbanist text-[28px] md:text-[44px] lg:text-[56px] text-white text-center lg:text-left lg:w-[583px]">
                  Discover, find and sell extraordinary monster NFTs
                </h1>
                <p className="text-[20px] font-urbanist font-normal text-[#66669C] text-center lg:text-left lg:w-[330px]">
                  Marketplace for monster character cllections non fungible
                  token NFTs
                </p>
                <div className="pt-5">
                  <div className="space-x-4 mx-auto w-fit lg:mx-0">
                    <button className="btn-round font-bold font-urbanist">
                      Create
                    </button>
                    <button className="btn-round-border  font-bold font-urbanist text-gradient">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
              <div className="right">
                <img
                  className="mx-auto lg:w-[500px] relative z-10"
                  src={main}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between ">
              <div className="left space-y-5 mx-auto lg:mx-0 w-fit lg:relative bottom-12">
                <div className="flex space-x-10">
                  <div className="flex items-center space-x-4">
                    <h2 className="heading-text text-white">50k</h2>
                    <p className="para-text w-[81px]">Our Active User </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <h2 className="heading-text text-white">45k</h2>
                    <p className="para-text w-[81px]">Our Art Work</p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  <div className="flex items-center space-x-4">
                    <h2 className="heading-text text-white">32k</h2>
                    <p className="para-text w-[81px]">Available Artist </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <h2 className="heading-text text-white">55k</h2>
                    <p className="para-text w-[81px]">Our Products </p>
                  </div>
                </div>
              </div>
              <div className="relative bottom-16 lg:bottom-24 z-30">
                <div className="right card-bg w-fit mx-auto  rounded-[6px] px-[28px] pt-5 pb-16">
                  <div className="flex space-x-8 md:space-x-[145px] items-center">
                    <h3 className="text-[20px] md:text-[32px] text-white font-urbanist font-semibold">
                      A cartoon character
                    </h3>
                    <button className="flex font-bold font-urbanist text-[14px] text-white items-center heart p-2">
                      <img className="mr-1" src={heart} alt="" />
                      100
                    </button>
                  </div>
                  <div className="bg-[#42315A] opacity-50 mt-3 h-[1px]">
                    <hr />
                  </div>

                  <div className="md:flex md:space-x-[46px] mt-5">
                    <div className="space-y-2">
                      <span className="para-text text-[14px]">Current Bid</span>
                      <p className="text-[18px] font-urbanist font-bold text-white">
                        4.89 eTH
                      </p>
                      <span className="para-text text-[14px]">$12.246</span>
                    </div>

                    <div className="mt-3 md:mt-0">
                      <span className="para-text text-[14px]">
                        Remaining time
                      </span>
                      <div className="flex space-x-8 mt-2">
                        <div>
                          <p className="text-[18px] font-urbanist font-bold text-white">
                            09
                          </p>
                          <p className="para-text text-[14px]">Days</p>
                        </div>
                        <div>
                          <p className="text-[18px] font-urbanist font-bold text-white">
                            22
                          </p>
                          <p className="para-text text-[14px]">Hours</p>
                        </div>
                        <div>
                          <p className="text-[18px] font-urbanist font-bold text-white">
                            56
                          </p>
                          <p className="para-text text-[14px]">minutes</p>
                        </div>
                        <div>
                          <p className="text-[18px] font-urbanist font-bold text-white">
                            36
                          </p>
                          <p className="para-text text-[14px]">Seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex card-btn text-white font-bold font-urbanist absolute left-[50%] translate-x-[-50%] -bottom-6">
                  Place a Bid
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[200px] md:top-[300px] lg:top-[154px] lg:left-[498px] z-0"
          src={rbg}
          alt=""
        />
      </section>
    </>
  );
}

export default Header
