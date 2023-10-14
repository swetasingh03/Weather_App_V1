"use client";
import React, { useState } from 'react'
import Input from './component/Input';
import Current from './component/Current';
import WeekForcast from './component/WeekForcast';
import WeatherDetails from './component/WeatherDetails';
function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data);
        setLocation("")
        setError("");
      } catch (error) {
        setError("City Not Found");
        setData({})
      }
    }
  }
  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className='text-white text-center h-screen mt-[5rem]'>
        <h2 className='text-3xl font-bold mb-4'>Welcome to the weather app</h2>
        <p className='text-xl'>Enter a city name to get the weather forecast</p>
      </div>
    )
  } else if (error !== "") {
    content = (
      <div className='text-white text-center h-screen mt-[5rem]'>
        <p className='text-3xl font-bold mb-4'>City Not Found</p>
        <p className='text-xl'>Enter a Valid City</p>
      </div>
    )
  } else {
    content = (<><div className='flex md:flex-row flex-col p-12 items-center justify-between'>
      <Current data={data} />
      <WeekForcast data={data} />
    </div>
      <div>
        <WeatherDetails data={data} />
      </div>
    </>)
  }

  return (
    <div className='bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit'>
      <div className='bg-white/25 w-full  flex flex-col h-fit'>
        <div className='flex flex-col md:flex-row justify-between items-center p-12'>
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className='mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl-italic font-bold'>Weather App</h1>
        </div>
        {content}
      </div>
    </div>
  )
}

export default Home