import React from 'react'
import { useLocation } from 'react-router-dom';
import Heart from "../Heart";

const TableMovie = ({ movies, handleShow, handleFavorites }) => {
  const routesName = useLocation().pathname
  const isIconActive = routesName.includes("/favorites");
  return (
    <div className="contaier table-responsive py-5">
      <table className="table">
        <thead>
          <tr>
            <th className="text-left pl-4">Title</th>
            <th>Year</th>
            <th>imDB ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td
                  className="movie-title"
                  onClick={() => handleShow(movie.imdbID)}
                >
                  {movie.Title}
                </td>
                <td>{movie.Year}</td>
                <td>{movie.imdbID}</td>
                <td>
                  <div onClick={() => handleFavorites(movie)}>
                    <Heart className="test" iconActive={isIconActive} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMovie