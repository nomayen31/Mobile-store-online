import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneDetailsCart from './PhoneDetailsCart';



const PhoneDetails = () => {
    const [phone, setPhone] = useState({})
    

    const phones = useLoaderData()
        // console.log(phones)
        ;
    const { id } = useParams()
    useEffect(() => {
        const findPhones = phones?.find(phone => phone.id === id)
        setPhone(findPhones)
    }, [id, phones])


    return (
        <div className='my-10'>
          <PhoneDetailsCart phone={phone}></PhoneDetailsCart>
        </div>
    );
};

export default PhoneDetails;