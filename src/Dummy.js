import React, { useState, useEffect } from 'react'
import './Fonts.css';

const Dummy = () => {
  const [data, setData] = useState([{}])
  const [input, setInput] = useState([{}])
  const [count, setCount] = useState(0)
  const [star, setStar] = useState(0)

  var x = "poo";

  // fetch data from /dir, convert response to json, and set data to json data
  useEffect(() => {
    fetch("/dummy").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []) // empty array at the end: to only run once

  const getStar = () => {
    fetch("/dumdum").then(
      res => res.json()
    ).then(
      star => {
        setStar(star)
        console.log(star)
      }
    )
  }


//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInput(values => ({...values, [name]: value}))
//   }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The form says: ${input}`)
  }

  return (
    <>
        <h1>Dummies</h1>
        <p>Test page for experimenting</p>
        {(typeof data.result === 'undefined') ? (
        <p>Loading!</p>
        ): (
        data.result.map((result, i) => (
            <p key={i}>{result}</p>
        ))
        )}

        <form onSubmit={handleSubmit}>
            <label>Enter data:
                <input
                    type='text'
                    name='username'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <input type='submit' />
        </form>
        <button onClick={getStar}>Fame</button>
        <p>Data:</p>
        <p>{star.result}</p>
        <p>Hello Shrek and {x}</p>
        <p>Hello Shrek and {data.result}</p>
        {/* <p>Hello Shrek and {data.result[1]}</p>
        <p>Hello Shrek and {data.result[1][0]}</p>
        <p>Hello Shrek and {data.result[1][1]}</p>
        <p>Hello Shrek and {data.result[1][2]}</p> */}
        <img 
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvGvCMkefN08P5zd3EyJdAkWRn0NM6_H9GAIQNIQLGqSnh8K4A"
        alt="new"
        />
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
    </>
  )
}

export default Dummy