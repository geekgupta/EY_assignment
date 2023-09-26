import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchCity() {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [city  , setcities] = useState([]) ;


  const getCity = useEffect(()=>{
    fetchApi2()
  } , [])

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
      var resultData = response.data.matches ; 
    

      setSearchResults(resultData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResults([]);
    }
  };

  const fetchApi2 = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    
      const response = await axios.get(
        'https://run.mocky.io/v3/585615f4-f37a-4b39-82bc-f8176453ff2f', 
      );
      var resultData = response.data.matches ; 
    

      setcities(resultData);
    
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setText(text);
    fetchApi(text);
  };

  const searchcities = (event) => {
    const text = event.target.value;
    setText1(text);

    const filteredCities = city.filter((cityName) =>
      cityName.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResults(filteredCities);

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
      <br/>

      <h5> Mocky implemetation </h5>

      <br/>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a city"
          value={text1}
          onChange={searchcities}
        />

        
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Mocky search
          </button>
        </div>
      </div>

{/* 
      <ul className="list-group mt-2">
        {searchResults.map((result, index) => (
          <li key={index} className="list-group-item">
            {result}
          </li>
        ))}
      </ul> */}

{searchResults.length > 0 && (
        <ul className="list-group mt-2">
          {searchResults.map((result, index) => (
            <li key={index} className="list-group-item">
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
