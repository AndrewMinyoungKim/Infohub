import React, { useState, useEffect } from 'react';
import  { Link } from "react-router-dom";

const MovieStarList = () => {
  const [movieStarList, setMovieStarList] = useState([{}])

  useEffect(() => {
    fetch("/movie_stars_list").then(
      res => res.json()
    ).then(
      movieStarList => {
        setMovieStarList(movieStarList)
        console.log(movieStarList)
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
            {/* <p>1. <Link to={`/MovieStar/${id}`}>Katherine Hepburn</Link></p>
            <p>2. <Link to={`/MovieStar/${id}`}>Bette Davis</Link></p>
            <p>3. <Link to={`/MovieStar/${id}`}>Audrey Hepburn</Link></p>
            <p>4. <Link to={`/MovieStar/${id}`}>Ingrid Bergman</Link></p> */}
        </div>
        <div className='col right'>
            Male Stars
            {movieStarList.info?.map((item, i) => (
              <p key={i}>
                {item[0]}. <Link to={`/MovieStar/${item[0]}`} state={{id : item[0]}}>{item[1]}</Link>
              </p>
            ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieStarList