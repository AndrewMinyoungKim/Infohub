import React, { useState, useEffect } from 'react';
import './MovieStar.css';
import './Fonts.css';
import { useParams, useLocation } from 'react-router-dom';
import MovieStarList from './MovieStarList';

const MovieStar = (props) => {
  // const star = useParams();
  const location = useLocation()
  const { id, sex } = location.state
    
  const [movieStar, setMovieStar] = useState([{}])

  useEffect(() => {
    fetch(`/movie_stars/${id}/${sex}`).then(
      res => res.json()
    ).then(
      movieStar => {
        setMovieStar(movieStar)
        console.log(movieStar)
      }
    )
  }, [id, sex]) // run if contents inside [] change

  const defaultPfp = "https://static.miraheze.org/greatcharacterswiki/thumb/c/c8/00705036-6E5E-4CAB-B89D-D80E3A2E5F62.png/640px-00705036-6E5E-4CAB-B89D-D80E3A2E5F62.png"

  return (
    <div style={{ backgroundColor: '#4287f5' }} className='inter-font'>
      <h2 className='header-styling sixtyfour-font'>
        Category: Movie Stars
      </h2>

      <div className='profile-row'>
        <div className='profile-col profile-left'>
          <img 
            src={typeof movieStar.info === 'undefined' ? (defaultPfp) : (movieStar.info[0][6])}
            alt="new"
            className='pfp'
          />
        </div>
        <div className='profile-col profile-right'>
          <p className='header-styling'>Name: {typeof movieStar.info === 'undefined' ? (<p>Loading...</p>) : (movieStar.info[0][1])}</p>
          <div className='header-styling'>
            {movieStar.info?.map((item, idx) => (<p key={idx}>Birth: {item[2]} - Death: {item[3]}</p>))}
            {movieStar.info?.map((item, idx) => (<p key={idx}>Decades of Prominence: {item[2]}</p>))}
            {movieStar.info?.map((item, idx) => (<p key={idx}>Death Location: {item[4]}</p>))}
            {movieStar.info?.map((item, idx) => (<p key={idx}>Stars on Hollywood Walk of Fame: {item[5]}</p>))}
            {movieStar.info?.map((item, idx) => (<p key={idx}>Died in California?
              {(item[7] === 1) ? (
                <> Yes</>
              ): (
                <> No</>
              )}
            </p>))}
          </div>
        </div>
      </div>

      <div className='abel-regular'>
        <h2>Well Known Films of Their's</h2>
        <p>5 Biggest Movies and their years</p>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg"
          alt="new"
          className='movie-poster'
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Vertigomovie_restoration.jpg"
          alt="new"
          className='movie-poster'
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg"
          alt="new"
          className='movie-poster'
        />
        <img 
          src="https://m.media-amazon.com/images/M/MV5BYjQ4ZDA4NGMtMTkwYi00NThiLThhZDUtZTEzNTAxOWYyY2E4XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_.jpg"
          alt="new"
          className='movie-poster'
        />
      </div>

      <p>Description</p>
      <p className='abel-regular'>Entire Filmography</p>

      <MovieStarList />
    </div>
  )
}

export default MovieStar;