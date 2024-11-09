import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import next from '../icons/Next.png'
import prev from "../icons/Previous.png";
import t1 from '../images/t1.png'
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
import t5 from "../images/t5.png";
import t6 from "../images/t6.png";
import t7 from "../images/t7.png";

import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

function TopSeller() {
  return (
    <div>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <Tabs>
              <div className="flex items-center space-x-6 md:space-x-12">
                <h3 className="text-[20px] md:text-[36px] font-bold font-urbanist text-white">
                  Top Seller
                </h3>
                <TabList className={`flex space-x-3 md:space-x-5`}>
                  <Tab
                    className={`tab text-[#66669C] p-3 focus:bg-white focus:outline-none font-bold font-urbanist`}
                  >
                    1 Day
                  </Tab>
                  <Tab
                    className={`tab text-[#66669C] p-3 focus:bg-white focus:outline-none font-bold font-urbanist`}
                  >
                    1 Week
                  </Tab>
                  <Tab
                    className={`tab text-[#66669C] p-3 focus:bg-white focus:outline-none font-bold font-urbanist`}
                  >
                    1 Month
                  </Tab>
                </TabList>
              </div>

              <TabPanel>
                <div className="mt-8">
                  <Swiper
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                      },
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={{
                      nextEl: ".swiper-btn-next",
                      prevEl: ".swiper-btn-prev",
                    }}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                  >
                    {[
                      {
                        id: 1,
                        pic: t1,
                        Name: "Crispin Berry",
                        price: "214.2 ETH",
                      },
                      {
                        id: 2,
                        pic: t2,
                        Name: "Samson Frost",
                        price: "205.43 ETH",
                      },
                      {
                        id: 3,
                        pic: t3,
                        Name: "Tommy Alvarez",
                        price: "170.3 ETH",
                      },
                      {
                        id: 4,
                        pic: t4,
                        Name: "Windsor Lane",
                        price: "120.7 ETH",
                      },
                      {
                        id: 5,
                        pic: t5,
                        Name: "Andy Hurlbutt",
                        price: "82.79 ETH",
                      },
                      {
                        id: 6,
                        pic: t6,
                        Name: "Blake Banks",
                        price: "68.2 ETH",
                      },
                      {
                        id: 7,
                        pic: t7,
                        Name: "Monica Lucas",
                        price: "52.8 ETH",
                      },
                      {
                        id: 8,
                        pic: t1,
                        Name: "Crispin Berry",
                        price: "214.2 ETH",
                      },
                      {
                        id: 9,
                        pic: t2,
                        Name: "Samson Frost",
                        price: "205.43 ETH",
                      },
                      {
                        id: 10,
                        pic: t3,
                        Name: "Tommy Alvarez",
                        price: "170.3 ETH",
                      },
                      {
                        id: 11,
                        pic: t4,
                        Name: "Windsor Lane",
                        price: "120.7 ETH",
                      },
                      {
                        id: 12,
                        pic: t5,
                        Name: "Andy Hurlbutt",
                        price: "82.79 ETH",
                      },
                    ].map(({ id, pic, Name, price }) => {
                      return (
                        <div key={id}>
                          <SwiperSlide>
                            <div className="flex flex-col items-center">
                              <img src={pic} alt="" />
                              <p className="text-[18px] text-white font-bold font-urbanist mt-2">
                                {Name}
                              </p>
                              <span className="text-[15px] text-[#66669C] font-urbanist font-bold">
                                {price}
                              </span>
                            </div>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                  </Swiper>
                  <div className="space-x-3 mx-auto md:mx-0 w-fit mt-3 md:mt-0 relative md:left-[85%] md:bottom-[260px] lg:left-[91%]">
                    <button className="swiper-btn-prev">
                      <img src={prev} alt="" />
                    </button>
                    <button className="swiper-btn-next">
                      <img src={next} alt="" />
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-8">
                  <Swiper
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                      },
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={{
                      nextEl: ".swiper-btn-next",
                      prevEl: ".swiper-btn-prev",
                    }}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                  >
                    {[
                      {
                        id: 1,
                        pic: t2,
                        Name: "Samson Frost",
                        price: "205.43 ETH",
                      },
                      {
                        id: 2,
                        pic: t3,
                        Name: "Tommy Alvarez",
                        price: "170.3 ETH",
                      },
                      {
                        id: 3,
                        pic: t5,
                        Name: "Andy Hurlbutt",
                        price: "82.79 ETH",
                      },
                      {
                        id: 4,
                        pic: t1,
                        Name: "Crispin Berry",
                        price: "214.2 ETH",
                      },
                      {
                        id: 5,
                        pic: t6,
                        Name: "Blake Banks",
                        price: "68.2 ETH",
                      },
                      {
                        id: 6,
                        pic: t7,
                        Name: "Monica Lucas",
                        price: "52.8 ETH",
                      },
                      {
                        id: 7,
                        pic: t4,
                        Name: "Windsor Lane",
                        price: "120.7 ETH",
                      },
                      {
                        id: 8,
                        pic: t1,
                        Name: "Crispin Berry",
                        price: "214.2 ETH",
                      },
                      {
                        id: 9,
                        pic: t2,
                        Name: "Samson Frost",
                        price: "205.43 ETH",
                      },
                      {
                        id: 10,
                        pic: t3,
                        Name: "Tommy Alvarez",
                        price: "170.3 ETH",
                      },
                      {
                        id: 11,
                        pic: t4,
                        Name: "Windsor Lane",
                        price: "120.7 ETH",
                      },
                      {
                        id: 12,
                        pic: t5,
                        Name: "Andy Hurlbutt",
                        price: "82.79 ETH",
                      },
                    ].map(({ id, pic, Name, price }) => {
                      return (
                        <div key={id}>
                          <SwiperSlide>
                            <div className="flex flex-col items-center">
                              <img src={pic} alt="" />
                              <p className="text-[18px] text-white font-bold font-urbanist mt-2">
                                {Name}
                              </p>
                              <span className="text-[15px] text-[#66669C] font-urbanist font-bold">
                                {price}
                              </span>
                            </div>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                  </Swiper>
                  <div className="space-x-3 mx-auto md:mx-0 w-fit mt-3 md:mt-0 relative md:left-[85%] md:bottom-[260px] lg:left-[91%]">
                    <button className="swiper-btn-prev">
                      <img src={prev} alt="" />
                    </button>
                    <button className="swiper-btn-next">
                      <img src={next} alt="" />
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-8">
                  <Swiper
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                      },
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={{
                      nextEl: ".swiper-btn-next",
                      prevEl: ".swiper-btn-prev",
                    }}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                  >
                    {[
                      {
                        id: 1,
                        pic: t3,
                        Name: "Tommy Alvarez",
                        price: "170.3 ETH",
                      },
                      {
                        id: 2,
                        pic: t5,
                        Name: "Andy Hurlbutt",
                        price: "82.79 ETH",
                      },
                      {
                        id: 3,
                        pic: t6,
                        Name: "Blake Banks",
                        price: "68.2 ETH",
                      },
                      {
                        id: 4,
                        pic: t7,
                        Name: "Monica Lucas",
                        price: "52.8 ETH",
                      },
                      {
                        id: 5,
                        pic: t2,
                        Name: "Samson Frost",
                        price: "205.43 ETH",
                      },
                      {
                        id: 6,
                        pic: t1,
                        Name: "Crispin Berry",
                        price: "214.2 ETH",
                      },
                      {
                        id: 7,
                        pic: t4,
                        Name: "Windsor Lane",
                        price: "120.7 ETH",
                      },
                      {
                        id: 8,
                        pic: t1,
                        Name: "Crispin Berry",
                        price: "214.2 ETH",
                      },
                      {
                        id: 9,
                        pic: t2,
                        Name: "Samson Frost",
                        price: "205.43 ETH",
                      },
                      {
                        id: 10,
                        pic: t3,
                        Name: "Tommy Alvarez",
                        price: "170.3 ETH",
                      },
                      {
                        id: 11,
                        pic: t4,
                        Name: "Windsor Lane",
                        price: "120.7 ETH",
                      },
                      {
                        id: 12,
                        pic: t5,
                        Name: "Andy Hurlbutt",
                        price: "82.79 ETH",
                      },
                    ].map(({ id, pic, Name, price }) => {
                      return (
                        <div key={id}>
                          <SwiperSlide>
                            <div className="flex flex-col items-center">
                              <img src={pic} alt="" />
                              <p className="text-[18px] text-white font-bold font-urbanist mt-2">
                                {Name}
                              </p>
                              <span className="text-[15px] text-[#66669C] font-urbanist font-bold">
                                {price}
                              </span>
                            </div>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                  </Swiper>
                  <div className="space-x-3 mx-auto md:mx-0 w-fit mt-3 md:mt-0 relative md:left-[85%] md:bottom-[260px] lg:left-[91%]">
                    <button className="swiper-btn-prev">
                      <img src={prev} alt="" />
                    </button>
                    <button className="swiper-btn-next">
                      <img src={next} alt="" />
                    </button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopSeller;
