import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempratureAndDetails from "./components/TempratureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherServices";
import getWeatherData from "./services/weatherServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [city, setCity] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {

      const message = city.q ? city.q : "current location.";

      toast.info("Fetching weather for " + message )
      const data = await getFormattedWeatherData({ ...city, units }).then(
        (data) => {

          toast.success(`Succesfully fetched weather for ${data.name},${data.country}`)
          setWeather(data);
        }
      );
   
    };
    fetchWeatherData();
  }, [city, units]);

  const setBackgroundColor = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    else return "from-yellow-700 to-orange-700";
  };

  return (
    <div className=" flex  justify-center h-screen">
    <div
      className={`  max-w-screen-md  bg-gradient-to-br ${setBackgroundColor()} shadow-xl shadow-gray-600
     my-5 py-5 px-32  flex  justify-center  flex-col m-auto   `}
    >
      <TopButtons setCityPassed={setCity} />
      <Inputs
        setCityPassed={setCity}
        setUnitsPassed={setUnits}
        unitsPassed={units}
      />

      {weather && (
        <div>
          <TimeAndLocation weatherPassed={weather} />
          <TempratureAndDetails weatherPassed={weather} unitsPassed={units} />
          {/* <Forecast title="Hourly Forecast" />
          <Forecast title="Daily Forecast" /> */}
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
    </div>
  );
}

export default App;
