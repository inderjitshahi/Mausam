import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  // State variables
  const [query, setQuery] = useState({ q: "Bangalore" }); // Holds the query object for weather data
  const [units, setUnits] = useState("metric"); // Holds the unit of temperature (metric/imperial)
  const [weather, setWeather] = useState(null); // Holds the weather data

  // Fetch weather data based on query and units
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // Determine the background color based on the temperature
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";

    // Set the temperature threshold based on the selected units
    const threshold = units === "metric" ? 20 : 60;

    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <div>
      <ParticleBackground /> {/* Particle.js background component */}

      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        {/* Top buttons component */}
        <TopButtons setQuery={setQuery} />

        {/* Inputs component */}
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {/* Display weather data if available */}
        {weather && (
          <div>
            {/* Time and location component */}
            <TimeAndLocation weather={weather} />

            {/* Temperature and details component */}
            <TemperatureAndDetails weather={weather} />

            {/* Hourly forecast component */}
            <Forecast title="hourly forecast" items={weather.hourly} />

            {/* Daily forecast component */}
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}

        {/* Toast notifications container */}
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div>
    </div>
  );
}

export default App;
