import React from 'react'
import './SearchResultslist.css'
import SearchResult from './SearchResult'
const SearchResultslist = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result,id)=>{
        return <SearchResult result = {result} key={id}/>
      })}
      
    </div>
  )
}

export default SearchResultslist