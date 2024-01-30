import React, { useState, useEffect } from 'react';
import  { Link } from "react-router-dom";
import './MovieStarList.css';
import './Fonts.css';

const MovieStarList = () => {
  const [allMovieStars, setallMovieStars] = useState([{}])

  useEffect(() => {
    fetch("/movie_stars_list").then(
      res => res.json()
    ).then(
      allMovieStars => {
        setallMovieStars(allMovieStars)
        console.log(allMovieStars)
      }
    )
  }, []) // empty array at the end: to only run once

  return (
    <div style={{ backgroundColor: '#4287f5' }}>
      MovieStarList
      <h2 className='header-styling honk-font'>
        Category: Movie Stars
      </h2>

      <div className='movie-stars-row sixtyfour-font'>
        <div className='movie-stars-col movie-stars-left'>
            Female Stars
            {allMovieStars.female?.map((item, i) => (
              <p key={i}>
                {item[0]}. <Link to={`/MovieStar/${item[0]}/female`} state={{id : item[0], sex: "female"}}>{item[1]}</Link>
              </p>
            ))}
        </div>
        <div className='movie-stars-col movie-stars-right'>
            Male Stars
            {allMovieStars.male?.map((item, i) => (
              <p key={i}>
                {item[0]}. <Link to={`/MovieStar/${item[0]}/male`} state={{id : item[0], sex: "male"}}>{item[1]}</Link>
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieStarList