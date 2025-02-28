'use client'
import Image from "next/image";
import Card from "@/components/Card"
import {useState, useEffect} from "react"
import {useFetchData} from "@/app/hooks/useFetchData"
import { Hash } from "crypto";

export default function Home() {  
  const [location, setLocation] = useState("")

  const API_KEY = "076d28c398562ec31bef41acfe863828"
  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  
  const {data, loading, error} = useFetchData(url)
  const [weatherData, setWeatherData] = useState(data)

  useEffect(() => {
    setWeatherData(data)
  }, [data])

  const [cities, setCities] = useState({
    cityList: [
      weatherData
    ]
  });

  const AddCityHandler = (weatherData: any) => {
    setCities({
      cityList: [
        ...cities.cityList, weatherData
      ]
    })
  }


  const searchLocation = (e: { key: string; })=>{
    if(e.key === "Enter"){
      AddCityHandler(data)
      setLocation("")
    } 
  }

  console.log(cities.cityList)
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-6">
        <input 
        type="text" 
        className="py-3 px-6 w-[700px] bg-white 
        text-lg rounded-3xl border border-gray-200 *
        text-gray-600 placehollder:text-gray-400
        focus:outline-none shadow-md" 
        placeholder="Enter a City"
        value={location}
        onChange={(e) => setLocation(e.target.value) }
        onKeyDownCapture={searchLocation}
        />
      </div>

      <div className="flex flex-wrap p-4 gap-4">
        {cities.cityList.map((weatherData, index) => (
          <Card 
            key={index} 
            weatherData={weatherData} 
            onClose={() => RemoveCityHandler(index)}
          />
        ))}
      </div>

    </div>
  );

}
