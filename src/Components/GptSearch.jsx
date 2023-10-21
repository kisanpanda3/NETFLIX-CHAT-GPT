import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../Utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          src={BG_URL}
          alt="icon"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;