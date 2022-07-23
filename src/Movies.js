import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { movie, isLoading } = useGlobalContext()
  if (isLoading) {
    return (
      <>
        <section>
          <div className='loading'>loading...</div>
        </section>
      </>
    )
  }
  return (
    <>
      <section className='container movie-page'>
        <div className='grid grid-4-col'>
          {movie.map((currMovie) => {
            const { imdbID, Poster, Title } = currMovie
            const movieName = Title.substring(0, 15)
            return (
              <NavLink to={`movies/${imdbID}`} key={imdbID}>
                <div className='card'>
                  <div className='card-info'>
                    <h2>
                      {movieName.length >= 15 ? `${movieName}... ` : movieName}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Movies
