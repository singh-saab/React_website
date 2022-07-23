import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()
// it acts as our warehouse

// Now we need our supplier/provider
// provider/supplier needs to wrap the area so that
// he can deliver everything at everyplace
// so wrap our indexe.js with AppProvider

// chaliye apna movies ka api import krte hai
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ID}`

const AppProvider = ({ children }) => {
  // these are our state variables

  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [error, setError] = useState({ show: false, msg: '' })
  const [query, setQuery] = useState('titanic')

  // this is function to fetch movies from Api
  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      if (data.Response === 'True') {
        setIsLoading(false)
        setMovie(data.Search)
        setError({
          show: false,
          msg: '',
        })
      } else {
        setError({
          show: true,
          msg: data.Error,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect hook
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`)
    }, 800)

    return () => clearTimeout(timerOut)
  }, [query])

  return (
    <AppContext.Provider value={{ isLoading, movie, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

// creating global custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
