
import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

import CurrentWeather from './CurrentWeather';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchLocation = () => {
    const { setLocation } = useContext(WeatherContext);
    const [location, setLocationState] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(location);
       
    };
    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <label> 
            <SearchOutlinedIcon className='icon'/>
            <input    
                type="text"
                placeholder="Search for a location"
                value={location}
                onChange ={e=>setLocationState(e.target.value)}
                />
                </label>
                <button type="submit">Search</button>
            </form>
            <CurrentWeather/>
        </div>
    );
}

export default SearchLocation;