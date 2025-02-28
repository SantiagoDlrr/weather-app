
export default function Card(weatherData){
    {/*console.log(weatherData)*/}
    return( 
        <div>
            {weatherData.weatherData.weather ? (
            <div className="w-[400px] h-[200px] bg-gray-800 shadow-lg rounded-xl m-auto px-6 top-[10] flex items-center">
                
                <div className="flex justify-between w-full">
                    <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
                        <div className="flex flex-col items-start justify-between h-full">
                            <div>
                                <p className="text-xl">
                                    {weatherData.weatherData.name},  
                                    {weatherData.weatherData.sys.country}
                                </p>
                                <p className="text-sm">
                                    {weatherData.weatherData.weather[0].description}
                                </p>
                            </div>
                            <div>
                                <h1 className="text-4xl font-semibold">
                                    {weatherData.weatherData.main.temp.toFixed()} °C
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weatherData.weather[0].icon}@2x.png`}></img></div>
                   
                </div>
            </div>
            ) : null} 
        </div>
    );
    
}