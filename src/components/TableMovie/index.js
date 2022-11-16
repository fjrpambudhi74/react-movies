import React from 'react'

const TableMovie = ({movies, handleShow}) => {
  return (
    <div className="table-responsive py-5">
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
                <i className="bi bi-star"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableMovie