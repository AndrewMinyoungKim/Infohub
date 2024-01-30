import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([{}])

  // fetch data from /members, convert response to json, and set data to json data
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []) // empty array at the end: to only run once


  return (
    <div className="home">
        James Dean Martin
        {/* <Link to="/">James Dean Martin</Link> */}
        {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
        ): (
        data.members.map((member, i) => (
            <p key={i}>{member}</p>
        ))
        )}
    </div>
  )
}

export default Home;