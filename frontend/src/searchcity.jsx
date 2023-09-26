import React, { useState } from 'react';
import axios from 'axios';

export default function SearchCity() {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchApi = async (data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/search/', 
        { "city_name": data },
        config
      );
      const resultData = response.data.matches;

      setSearchResults(resultData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResults([]);
    }
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setText(text);
    fetchApi(text);
  };

  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a city"
          value={text}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
      <ul className="list-group mt-2">
        {searchResults.map((result, index) => (
          <li key={index} className="list-group-item">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
}
