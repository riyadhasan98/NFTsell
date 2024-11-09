import React from 'react'
import trending from '../images/trending.png'
import arrow from '../icons/arrow.svg'

function TrendingCard() {
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="trending flex flex-col-reverse lg:flex-row p-8 md:p-14 items-center lg:space-x-20">
            <div>
              <img className="mx-auto lg:mx-0 mt-5 md:mt-8 lg:mt-0" src={trending} alt="" />
            </div>
            <div className='space-y-3 md:space-y-5 lg:space-y-8'>
              <h2 className="heading-text lg:w-[282px] leading-[62px]">
                Trending This Week
              </h2>
              <p className="para-text leading-[26px] lg:w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="md:flex md:space-x-[46px]">
                <div className="space-y-2">
                  <span className="para-text text-[14px]">Current Bid</span>
                  <p className="text-[18px] font-urbanist font-bold text-white">
                    4.89 eTH
                  </p>
                  <span className="para-text text-[14px]">$12.246</span>
                </div>

                <div className="mt-3 md:mt-0">
                  <span className="para-text text-[14px]">Remaining time</span>
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
              <button className="flex card-btn text-white font-bold font-urbanist">
                Place a Bid
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendingCard
