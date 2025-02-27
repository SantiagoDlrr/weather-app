'use client'
import Image from "next/image";
import Card from "@/components/Card"
import {useState} from "react"
import {useFetchData} from "@/app/hooks/useFetchData"

export default function Home() {  
  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState({})


  const API_KEY = "076d28c398562ec31bef41acfe863828"
  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  const {data, loading, error} = useFetchData(url)

  const searchLocation = (e: { key: string; })=>{
    if(e.key === "Enter"){
      setWeatherData(data)
      setLocation("")
    } 
  }


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

      <Card weatherData = {weatherData} />

    </div>
  );

}
