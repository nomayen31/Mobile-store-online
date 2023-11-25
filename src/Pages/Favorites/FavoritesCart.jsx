import React from 'react';

const FavoritesCart = ({phone}) => {
    const { image, phone_name, price,  brand_name } = phone || {};
    return (
        <div>
             <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        alt="image"
                        className="object-cover w-full h-full"


                        
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {brand_name}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {phone_name}
                    </h4>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        ${price}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default FavoritesCart;