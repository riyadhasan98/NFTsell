import React, { useState, useEffect } from "react";
import trending from "../images/trending.png";
import arrow from "../icons/arrow.svg";

function TrendingCard() {
   const initialTime = 2 * 24 * 3600 + 12 * 3600 + 45 * 60 + 50;

   const [timeLeft, setTimeLeft] = useState(initialTime);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   useEffect(() => {
     // Update the individual time units based on the remaining time
     const updateCountdown = (time) => {
       setDays(Math.floor(time / (24 * 3600)));
       setHours(Math.floor((time % (24 * 3600)) / 3600));
       setMinutes(Math.floor((time % 3600) / 60));
       setSeconds(time % 60);
     };

     // Initialize the countdown
     updateCountdown(timeLeft);

     const timerId = setInterval(() => {
       setTimeLeft((prevTime) => {
         if (prevTime <= 1) {
           clearInterval(timerId);
           return 0;
         }
         const newTime = prevTime - 1;
         updateCountdown(newTime);
         return newTime;
       });
     }, 1000);

     return () => clearInterval(timerId);
   }, [timeLeft]);
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="trending flex flex-col-reverse lg:flex-row p-8 md:p-14 items-center lg:space-x-20">
            <div>
              <img
                className="mx-auto lg:mx-0 mt-5 md:mt-8 lg:mt-0"
                src={trending}
                alt=""
              />
            </div>
            <div className="space-y-3 md:space-y-5 lg:space-y-8">
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
                        {days}
                      </p>
                      <p className="para-text text-[14px]">Days</p>
                    </div>
                    <div>
                      <p className="text-[18px] font-urbanist font-bold text-white">
                        {hours}
                      </p>
                      <p className="para-text text-[14px]">Hours</p>
                    </div>
                    <div>
                      <p className="text-[18px] font-urbanist font-bold text-white">
                        {minutes}
                      </p>
                      <p className="para-text text-[14px]">minutes</p>
                    </div>
                    <div>
                      <p className="text-[18px] font-urbanist font-bold text-white">
                        {seconds}
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

export default TrendingCard;
