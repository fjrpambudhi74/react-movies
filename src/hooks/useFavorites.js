import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useFavorites = () => {
   const [favorites, setFavorites] = useState(() => {
     return JSON.parse(localStorage.getItem("favorites-movie")) || [];
   });

  const addFavorite = (fav) => {
    const existingFavorite = favorites.find(
      (favoriteItem) => favoriteItem.imdbID === fav.imdbID
    );

    if (!existingFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, fav]);
      toast.success("Item added to the watchlist!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster",
        theme: "dark"
      });
    } else {
      toast.warning("Item is already on your list!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster",
        theme: "dark",
      });
    }
  };

  const removeFavorite = (fav) => {
    setFavorites(favorites.filter((f) => f.imdbID !== fav.imdbID));

    toast.error("Item removed from the watchlist!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toaster",
      theme: "dark",
    });
  };

  return {
    favorites,
    addFavorite,
    setFavorites,
    removeFavorite,
  };
};

export default useFavorites;
