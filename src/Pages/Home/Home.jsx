// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";
import { useState } from "react";
import UseGetPhones from "../../hook/UseGetPhones";

const Home = () => {
    // const phones = useLoaderData()
    const [phones] = UseGetPhones()

    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;

// 3.2------------------------- 