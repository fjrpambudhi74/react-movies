import React, { useEffect, useState } from 'react'
import ModalContent from '../components/ModalContent';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null)


  const handleShow = (imdbID) => {
    setSelectedId(imdbID);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedId(null);
  }

  const fetchDataMovies = async (searchMovies) => {
    const url = `http://www.omdbapi.com/?s=${searchMovies}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) setMovies(responseJson.Search);

  };

  useEffect(() => {
    fetchDataMovies(searchMovies);
    if (searchMovies === "") setMovies([]);
  }, [searchMovies]);

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-12">
          <h1>Movies</h1>
          <div className="form-group has-search d-flex justify-content-center">
            <span className="form-control-feedback">
              <i className="bi bi-search search-icon"></i>
            </span>
            <input
              type="text"
              className="form-control bg-transparent w-50 search-text"
              placeholder="Search"
              value={searchMovies}
              onChange={(evt) => setSearchMovies(evt.target.value)}
            />
          </div>
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
        </div>
      </div>
      <ModalContent
        show={showModal}
        imdbID={selectedId}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Movies;
