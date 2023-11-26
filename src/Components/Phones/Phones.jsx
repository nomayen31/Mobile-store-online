/* eslint-disable react/prop-types */
import React from 'react';
import Phone from '../Phone/Phone';



const Phones = ({phones}) => {
    console.log(phones);
   
  
    return (
        <div className='py-10'>
            <h1 className='text-2xl text-center'>All Category Phones here</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    phones ?.map(phone =><Phone
                    key={phone.id}
                    phone={phone}
                    ></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;