import React, { useState } from 'react'
import p1 from '../images/p1.png'
import p11 from '../images/p11.png'
import p12 from '../images/p12.png'
import p13 from '../images/p13.png'
import p2 from '../images/p2.png'
import p21 from '../images/p21.png'
import p22 from '../images/p22.png'
import p23 from '../images/p23.png'
import p3 from '../images/p3.png'
import p31 from '../images/p31.png'
import p32 from '../images/p32.png'
import p33 from '../images/p33.png'
import profile1 from '../images/profile1.png'
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";
import heart from '../icons/heart.svg'


function Popular() {
    const [loadMore, setLoadMore] = useState(false);
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <h2 className="heading-text text-white text-center">
              Popular Collection
            </h2>

            <div className="grid-res-cols mt-5 md:mt-8">
              {[
                {
                  id: 1,
                  pic1: p1,
                  pic2: p11,
                  pic3: p12,
                  pic4: p13,
                  profile: profile1,
                },
                {
                  id: 2,
                  pic1: p2,
                  pic2: p21,
                  pic3: p22,
                  pic4: p23,
                  profile: profile2,
                },
                {
                  id: 3,
                  pic1: p3,
                  pic2: p31,
                  pic3: p32,
                  pic4: p33,
                  profile: profile3,
                },
                {
                  id: 4,
                  pic1: p2,
                  pic2: p21,
                  pic3: p22,
                  pic4: p23,
                  profile: profile2,
                },
                {
                  id: 5,
                  pic1: p1,
                  pic2: p11,
                  pic3: p12,
                  pic4: p13,
                  profile: profile1,
                },
                {
                  id: 6,
                  pic1: p3,
                  pic2: p31,
                  pic3: p32,
                  pic4: p33,
                  profile: profile3,
                },
                {
                  id: 7,
                  pic1: p3,
                  pic2: p31,
                  pic3: p32,
                  pic4: p33,
                  profile: profile3,
                },
                {
                  id: 8,
                  pic1: p2,
                  pic2: p21,
                  pic3: p22,
                  pic4: p23,
                  profile: profile2,
                },
                {
                  id: 9,
                  pic1: p1,
                  pic2: p11,
                  pic3: p12,
                  pic4: p13,
                  profile: profile1,
                },
              ].map(({ id, pic1, pic2, pic3, pic4, profile }) => {
                return (
                  <div
                    key={id}
                    className={`grid-card-3 ${
                      id < 4 || loadMore ? "" : "hidden"
                    }`}
                  >
                    <div className="relative">
                      <div className="categories p-[15px] space-y-2">
                        <img className="max-sm:w-full" src={pic1} alt="" />
                        <div className="flex justify-between">
                          <img
                            className="md:w-[80px] lg:w-[110px]"
                            src={pic2}
                            alt=""
                          />
                          <img
                            className="md:w-[80px] lg:w-[110px]"
                            src={pic3}
                            alt=""
                          />
                          <img
                            className="md:w-[80px] lg:w-[110px]"
                            src={pic4}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-[16px] font-bold font-urbanist text-white">
                              Colorful Abstract
                            </h4>
                            <p className="text-[12px] font-urbanist text-[#8A8AA0]">
                              Created by{" "}
                              <span className="text-white font-urbanist font-bold text-[14px]">
                                Mason Woodward
                              </span>
                            </p>
                          </div>
                          <button className="flex items-center text-white font-urbanist bg-[#14141F] bg-opacity-50 rounded-[8px] py-1 px-2">
                            <img className="mr-1" src={heart} alt="" />
                            100
                          </button>
                        </div>
                      </div>
                      <img
                        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                        src={profile}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`mx-auto w-fit mt-10 ${loadMore ? "hidden" : ""}`}>
              <button
                onClick={() => setLoadMore(true)}
                className="btn-round-border  font-bold font-urbanist text-gradient"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Popular
