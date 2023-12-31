import { useEffect } from "react";
import { useState } from "react";
import FavoritesCart from "./FavoritesCart";


const Favorites = () => {
      const [favorites, setFavorites] = useState([]);
      const [noFound, setNoFound] = useState("");
      const [isShow, setIsShow] = useState(false);
      const [ totalPrice , setTotalPrice ] = useState(0)

      useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))

       if (favoriteItems) {
        setFavorites(favoriteItems)
        const total = favoriteItems.reduce((previousValue, currentValue)=> previousValue + currentValue.price , 0)
        setTotalPrice(total)
       }else{
        setNoFound('No Data Found 😂')
       }
    },[])


    console.log(favorites);
    const handleRemove = () =>{
        localStorage.clear()
        setFavorites([])
        setNoFound('Data Not Found 😂')
    }
    console.log(isShow);
    return (
        <div className="my-10">
            {noFound ? <p className="h-[60vh] flex justify-center items-center text-2xl font-bold">{noFound}</p> : <div>
                {
                    favorites.length > 0 && 
                     <div>
                        <button  onClick={handleRemove} className="py-2 px-4  bg-green-500 block mx-auto">Delete All Favorites</button>
                        <h1 className="text-center">Total Price : {totalPrice}</h1>
                     </div>
                }
                <div className="grid grid-cols-2 gap-5 my-10">
                {

                isShow ? favorites.map(phone =>(
                    <FavoritesCart phone={phone} key={phone.id}></FavoritesCart>
                ))
                :favorites.slice(0,4).map(phone =>(
                    <FavoritesCart phone={phone} key={phone.id}></FavoritesCart>
                ))
                    
                }
                </div>

                {
                    favorites.length > 4 && <button  onClick={()=>setIsShow(!isShow)} className="py-2 px-4 my-10 bg-green-500 block mx-auto">{isShow ? 'See Less' : 'see More'}</button>
                }



            </div> }
        </div>
    );
};

export default Favorites;