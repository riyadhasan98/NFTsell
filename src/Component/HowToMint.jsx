import React from 'react'
import h1 from '../icons/h1.svg'
import h2 from "../icons/h2.svg";
import h3 from "../icons/h3.svg";
import h4 from "../icons/h4.svg";
import h from '../icons/h-arrow.svg'

function HowToMint() {
  return (
    <>
      <section className="mt-10 md:mt-14">
        <div className="cus-container">
          <div className="">
            <div>
              <p className="text-gradient text-center font-urbanist font-semibold text-[20px]">
                Easy Steps
              </p>
              <h2 className="heading-text text-center">How to mint</h2>
            </div>

            <div className="grid-res-cols mt-6">
              {[
                {
                  id: 1,
                  icon: h1,
                  title: "Create your collection",
                  text: "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains",
                },
                {
                  id: 2,
                  icon: h2,
                  title: "Add your NFTs",
                  text: "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque",
                },
                {
                  id: 3,
                  icon: h3,
                  title: "List them for sale",
                  text: "Choose between auctions, fixed-price listings, and declining-price listings.",
                },
                {
                  id: 4,
                  icon: h4,
                  title: "Set up your wallet",
                  text: "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, ",
                },
              ].map(({ id, icon, title, text }) => {
                return (
                  <div key={id} className="grid-card-4 h-full">
                    <div className="card space-y-4 py-10 px-7">
                      <img src={icon} alt="" />
                      <h3 className="font-bold text-[20px] font-urbanist text-white">
                        {title}
                      </h3>
                      <p className="para-text">{text}</p>
                      <div className="w-fit">
                        <button className="flex items-center text-white font-bold text-[20px] font-urbanist mb-2 hover:text-gray-400">
                          View Details <img className="ml-4" src={h} alt="" />
                        </button>
                        <hr />
                      </div>
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

export default HowToMint
