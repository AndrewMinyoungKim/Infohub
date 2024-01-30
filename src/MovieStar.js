import React, { useState, useEffect } from 'react';
import './MovieStar.css';
import { useParams } from 'react-router-dom';
import MovieStarList from './MovieStarList';

const MovieStar = (props) => {
  const star = useParams();
  console.log("hi");
  console.log(star);
  console.log(star.id);
  console.log("hifff");
    
  const [movieStar, setMovieStar] = useState([{}])

  // fetch data from /movie_stars, convert response to json, and set data to json data
  useEffect(() => {
    fetch(`/movie_stars/${star.id}`).then(
      res => res.json()
    ).then(
      movieStar => {
        setMovieStar(movieStar)
        console.log(movieStar)
      }
    )
  }, []) // empty array at the end: to only run once

  // useEffect(() => {
  //   fetch(`/movie_stars`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       content: star.id
  //     })
  //   }).then(
  //     res => res.json()
  //   ).then(
  //     movieStar => {
  //       setMovieStar(movieStar)
  //       console.log(movieStar)
  //     }
  //   )
  // }, []) // empty array at the end: to only run once

  const defaultPfp = "https://static.miraheze.org/greatcharacterswiki/thumb/c/c8/00705036-6E5E-4CAB-B89D-D80E3A2E5F62.png/640px-00705036-6E5E-4CAB-B89D-D80E3A2E5F62.png"

  return (
    <div style={{ backgroundColor: '#4287f5' }}>
      <h2 className='ccc'>
        Category: Movie Stars
      </h2>

      <div className='row'>
        <div className='col left'>
          <img 
            src={typeof movieStar.info === 'undefined' ? (defaultPfp) : (movieStar.info[0][6])}
            alt="new"
            className='pfp'
          />
        </div>
        <div className='col right'>
          <p className='ccc'>Name: {typeof movieStar.info === 'undefined' ? (<p>Loading...</p>) : (movieStar.info[0][1])}</p>
          <div className='ccc'>
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

      <div>
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
      <p>Entire Filmography</p>

      <MovieStarList />
    </div>
  )
}

export default MovieStar;