import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const { query, setQuery, error } = useGlobalContext()
  // return <h2>hello akash</h2>
  return (
    <section className='search-section'>
      <h2>Search your favourite movie</h2>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type='text'
            placeholder='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className='card-error'>
        <p>{error.show && error.msg}</p>
      </div>
    </section>
  )
}

export default Search
