import React, { useState, useEffect } from "react";
import CloudIcon from "../assets/cloudy-day-1.svg";
import RainySun from "../assets/rainy-1.svg";
import Rain from "../assets/rainy-6.svg";
import Snow from "../assets/snowy-6.svg";
import Cloud from "../assets/cloudy.svg";
import Thunder from "../assets/thunder.svg";
import Day from "../assets/day.svg";
import Opera from "../assets/opera.png";
import Arc from "../assets/ArcTriumph.png";

const Weather = () => {
  const API_KEY = "f13b47dfbe1ddde727085e349c9f9257";
  const city = "Bucharest";
  const [weatherData, setWeatherData] = useState(null);
  const [Wicon, setWicon] = useState(CloudIcon);

  const search = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);

      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWicon(Day);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setWicon(CloudIcon);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        setWicon(CloudIcon);
      } else if (
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setWicon(Cloud);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n"
      ) {
        setWicon(RainySun);
      } else if (
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        setWicon(Rain);
      } else if (
        data.weather[0].icon === "11d" ||
        data.weather[0].icon === "11n"
      ) {
        setWicon(Thunder);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        setWicon(Snow);
      } else {
        setWicon(Day);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  const roundedTemperature = weatherData
    ? Math.round(weatherData.main.temp)
    : null;
  const roundedWindSpeed = weatherData
    ? Math.round(weatherData.wind.speed)
    : null;

  return (
    <>
      {weatherData && (
        <div className="flex flex-col items-center justify-center  w-full bg-box-color rounded-xl relative p-5  md:weather xl:col-span-2 xl:row-span-2 scale-up-center-second box-shadow-2xl">
          <div className="flex items-center">
            <img
              className="h-20 md:hidden"
              src={Opera}
              alt="Bucharest's Opera House"
            />
            <img
              className="h-[6rem] 2xl:h-[8rem]"
              src={Wicon}
              alt="Weather Icon"
            />
            <img
              className="h-20 md:hidden"
              src={Arc}
              alt="Bucharest's Triumph Arc"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white text-4xl lg:text-2xl 2xl:text-3xl font-bold   md:block poppins">
              {weatherData.name}
            </span>
            <span className="text-white text-4xl lg:text-2xl 2xl:text-3xl font-bold  md:block poppins">
              {roundedTemperature} °
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
