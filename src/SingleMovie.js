import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from './context'
import { NavLink } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState([])

  // this is function to fetch movies from Api
  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      if (data.Response === 'True') {
        setIsLoading(false)
        setMovie(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect hook
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`)
    }, 800)

    return () => clearTimeout(timerOut)
  }, [id])

  if (isLoading) {
    return (
      <>
        <section className='movie-section'>
          <div className='loading'>loading...</div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt='' />
          </figure>
          <div className='card-content'>
            <p className='title'>{movie.Title}</p>
            <p className='card-text'>{movie.Released}</p>
            <p className='card-text'>{movie.Genre}</p>
            <p className='card-text'>{movie.imdbRating}</p>
            <p className='card-text'>{movie.Country}</p>
            <NavLink to='/' className='back-btn'>
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleMovie
