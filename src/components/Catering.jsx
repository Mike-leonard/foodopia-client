import React from 'react';

const Catering = () => {
    return (
        <div className="relative">
            <img src="https://shaguncatering.com/wp-content/uploads/2020/12/asiya-kiev-SiwrpBnxDww-unsplash-3.jpg" alt="" className='w-full opacity-25 h-96' />

            <div className="absolute top-0 right-0 bottom-0 left-0 m-auto  rounded-lg text-[#000000] text-center leading-relaxed">
                <h4 className="text-4xl my-4">Catering</h4>
                <p className="text-[#aa218f]">
                    Please call at 24 hours in advance for catering orders
                </p>

                <div className="flex flex-row gap-10 justify-center mt-10 text-[#aa218f] text-xl">
                    <div className="w-48">
                        <img src="https://img.taste.com.au/VtQHAAR_/taste/2016/11/sweet-potato-and-corn-salad-110251-1.jpeg" alt="" className="rounded-full h-44" />
                        <p>Fresh Salad</p>
                    </div>
                    <div className="w-48">
                        <img src="https://assets.epicurious.com/photos/57bf146a84c001120f61650a/16:9/w_2560%2Cc_limit/platter-party-25082016.jpg" alt=""   className="rounded-full h-44" />
                        <p>Party Platters</p>
                    </div>
                    <div  className="w-48">
                        <img src="https://www.englishclub.com/images/vocabulary/food/fish-seafood/fish-seafood.jpg" alt=""   className="rounded-full h-44" />
                        <p>Sea Food</p>
                    </div>
                    <div  className="w-48">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2016/11/Vegan-chocolate-tart-168bf51.jpg?quality=90&resize=440,400" alt=""  className="rounded-full h-44"  />
                        <p>Vegan Dessert</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catering;