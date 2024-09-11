/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import Input from './main.jsx';  

const cities = [
  "East Azerbaijan",
  "West Azerbaijan",
  "Ardabil",
  "Isfahan",
  "Alborz",
  "Bushehr",
  "Tehran",
  "Chaharmahal and Bakhtiari",
  "South Khorasan",
  "Khorasan Razavi",
  "North Khorasan",
  "Khuzestan",
  "Zanjan",
  "Semnan",
  "Sistan and Baluchistan",
  "Fars",
  "Qazvin",
  "Qom",
  "Kurdistan",
  "Kerman",
  "Kermanshah",
  "Kohgiloyeh and Boir Ahmad",
  "Golestan",
  "Guilan",
  "Lorestan",
  "Mazandaran",
  "central",
  "Hormozgan",
  "Hamadan",
  "Yazd",
];

function App() {
  const [filteredCities, setFilteredCities] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showHint, setShowHint] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setShowHint(!value);

    if (value) {
      const filtered = cities.filter(city => city.startsWith(value));
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCityClick = (city) => {
    setInputValue(city);
    setFilteredCities([]);
    setShowHint(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#007BFF' }}>Select the city</h1>
      <div className="input">
        <Input 
          handleChange={handleChange} 
          hint={showHint ? " Enter the name of the city" : ""} 
          value={inputValue} 
        />
      </div>
      <ul>
        {filteredCities.map((city, index) => (
          <li key={index} onClick={() => handleCityClick(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
