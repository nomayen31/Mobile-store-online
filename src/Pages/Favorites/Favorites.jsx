import { useEffect } from "react";
import { useState } from "react";
import FavoritesCart from "./FavoritesCart";


const Favorites = () => {
      const [favorites, setFavorites] = useState([]);
      const [noFound, setNoFound] = useState("")

      useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
       if (favoriteItems) {
        setFavorites(favoriteItems)
       }else{
        setNoFound('No Data Found 😂')
       }
    },[])
    console.log(favorites);
    return (
        <div className="my-10">
            {noFound ? <p className="h-[60vh] flex justify-center items-center text-2xl font-bold">{noFound}</p> : <div>

                <div className="grid grid-cols-2 gap-5">
                    {favorites.map(phone =><FavoritesCart phone={phone} key={phone.id}></FavoritesCart> )}
                </div>




            </div> }
        </div>
    );
};

export default Favorites;