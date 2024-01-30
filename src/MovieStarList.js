import React, { useState, useEffect } from 'react';
import  { Link } from "react-router-dom";

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
    <div>
        MovieStarList
        <div style={{ backgroundColor: '#4287f5' }}>
      <h2 className='ccc'>
        Category: Movie Stars
      </h2>

      <div className='row'>
        <div className='col left'>
            Female Stars
            {allMovieStars.female?.map((item, i) => (
              <p key={i}>
                {item[0]}. <Link to={`/MovieStar/${item[0]}/female`} state={{id : item[0], sex: "female"}}>{item[1]}</Link>
              </p>
            ))}
        </div>
        <div className='col right'>
            Male Stars
            {allMovieStars.male?.map((item, i) => (
              <p key={i}>
                {item[0]}. <Link to={`/MovieStar/${item[0]}/male`} state={{id : item[0], sex: "male"}}>{item[1]}</Link>
              </p>
            ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieStarList