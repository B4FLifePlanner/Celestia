import React, { useState, useEffect } from 'react';
import "./Main.css"

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const city = 'Damascus';
    const apiKey = '585619061c995c0612e7322e751c37c9';

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError(err.message)
            setWeatherData(null);
        }
    };
    useEffect(() => {
        fetchWeatherData();
    }, []);
    return (
        <div>
            {weatherData && (
                <div className='weather flex items-center'>
                    <img
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt={weatherData.weather[0].description}
                        style={{ width: '50px', height: '50px' }}
                    />
                    <h2 className='font-bold'>{weatherData.name}</h2>
                    <p className='ml-4 font-bold'>Temperature: {weatherData.main.temp} °C</p>
                    <p className='ml-4 font-bold'>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;