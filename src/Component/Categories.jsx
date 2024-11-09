import React from 'react'
import c1 from '../icons/c1.svg'
import c2 from "../icons/c2.svg";
import c3 from "../icons/c3.svg";
import c4 from "../icons/c4.svg";
import c5 from "../icons/c5.svg";
import c6 from "../icons/c6.svg";

function Categories() {
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <h2 className="heading-text text-white lg:w-[600px] text-center mx-auto leading-[120%]">
              Various Kinds of Categories That You Can Explore
            </h2>
            <div className="grid-res-cols mt-5 md:mt-8 lg:mt-12">
              {[
                {
                  id: 1,
                  icon: c1,
                  title: "Art",
                },
                {
                  id: 2,
                  icon: c2,
                  title: "Music",
                },
                {
                  id: 3,
                  icon: c3,
                  title: "Sport",
                },
                {
                  id: 4,
                  icon: c4,
                  title: "Collectibles",
                },
                {
                  id: 5,
                  icon: c5,
                  title: "Trending Cards",
                },
                {
                  id: 6,
                  icon: c6,
                  title: "All NFTs",
                },
              ].map(({ id, icon, title }) => {
                return (
                  <div key={id} className="grid-card-3">
                    <div className="categories p-9 space-y-4">
                      <img src={icon} alt="" />
                      <h4 className="text-white text-[32px] font-semibold font-urbanist">
                        {title}
                      </h4>
                      <p className="para-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories
