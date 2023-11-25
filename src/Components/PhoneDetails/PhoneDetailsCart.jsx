import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneDetailsCart = ({phone}) => {
    const {id, image, phone_name, price,  brand_name } = phone || {};

    const handleAddToFavorite = ()=>{
        const notify = () => toast("Favorites item added ");
        const here = () => toast("This Item is already added on favorite  ");

        const addedFavoritesArray = [];

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))


        if (!favoriteItems) {
            addedFavoritesArray.push(phone)
            localStorage.setItem('favorites',JSON.stringify(addedFavoritesArray))
            notify()
        }
        else{
            const isExits = favoriteItems.find(phone => phone.id === id)
            if (!isExits) {
                addedFavoritesArray.push(...favoriteItems, phone)
                localStorage.setItem('favorites',JSON.stringify(addedFavoritesArray))
                notify()
            }
            else{
                here()
            }  
           
        } 
    }
    
    return (
        <div className='flex justify-center items-center h-[60vh]'>
            <ToastContainer />
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
                    <a className="inline-block" href="#">
                        <button onClick={handleAddToFavorite}
                            className=" mt-2  flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white-500 uppercase align-middle transition-all rounded-lg select-none bg-pink-500/30 hover:bg-blue-900/90 hover:text-white  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to  Favorite
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetailsCart;