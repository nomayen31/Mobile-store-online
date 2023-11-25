import { useEffect } from "react";
import { useState } from "react";

const Favorites = () => {
      const [favorites, setFavorites] = useState([]);
      const [noFound, setNoFound] = useState("")

      useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
       if (favoriteItems) {
        setFavorites(favoriteItems)
       }else{
        setNoFound('No Data Found')
       }
    },[])
    console.log(favorites);
    return (
        <div className="my-10">
            {noFound ? <p className="text-center text-2xl font-bold">{noFound}</p> : <div>




            </div> }
        </div>
    );
};

export default Favorites;