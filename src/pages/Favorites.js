import React, { useEffect } from "react";
import TableMovie from "../components/TableMovie";
import useFavorites from "../hooks/useFavorites";

export default function Favourites() {
   const { favorites, setFavorites, removeFavorite } = useFavorites();

   useEffect(() => {
     const localFavorites = localStorage.getItem("favorites-movie");
     const parsedFavorites = JSON.parse(localFavorites);

     if (parsedFavorites) {
       setFavorites(parsedFavorites);
     }
   }, []);

   useEffect(() => {
     const localFavorites = JSON.stringify(favorites);
     localStorage.setItem("favorites-movie", localFavorites);
   }, [favorites]);

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-3">Favourites</h1>
      {favorites.length <= 0 ? (
        <div>
          <h3 className="mt-5">Oops Favorite Movie Not Found</h3>
        </div>
      ) : (
        <TableMovie movies={favorites} handleFavorites={removeFavorite} />
      )}
    </div>
  );
}
