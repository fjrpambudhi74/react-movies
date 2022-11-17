import React, { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";

const ModalContent = (props) => {
  const [content, setContent] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovieDetail = async () => {
    const url = `http://www.omdbapi.com/?i=${props.imdbID}&apikey=263d22d8`;

    try {
      setIsLoading(true)
      const response = await fetch(url)
      const responseJson = await response.json()
      if(responseJson) {
        setContent(responseJson);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchMovieDetail();
    // eslint-disable-next-line
  }, [props.imdbID]);

  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        size="lg"
        contentClassName="movie-modal"
      >
        {isLoading ? (
          <div className="text-center my-5">Data Loading ...</div>
        ) : (
          <Modal.Body>
            <div className="text-center">
              <img src={content.Poster} loading="lazy" alt={content.Poster} />
            </div>
            <div className="pl-5 mt-4">
              <h3>{content.Title}</h3>
              <p>Year : {content.Year}</p>
              <p>Genre : {content.Genre}</p>
              <p>Released : {content.Released}</p>
              <p>Director : {content.Director}</p>
              <p>Actors : {content.Actors}</p>
              <p>Plot : {content.Plot}</p>
              <p>Awards : {content.Awards}</p>
              <p>
                IMDB Rating : {content.imdbRating} ({content.imdbVotes})
              </p>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default ModalContent;