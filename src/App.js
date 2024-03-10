import { useState } from "react";
import "./App.css";
import CustomDate from "./CustomDate";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    const cityName = event.target.value;
    setCity(cityName);
  };

  const fetchData = () => {
    const apiKey = "61efc3ca35c4e15351f6ae364fd1c597";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => console.log("Error fetching data : ", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFlag(true);
    fetchData();
  };

  return (
    <>
      <Header />
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter you city name"
            value={city}
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
        {<CustomDate />}
        <div className="Display">
          <h1>{flag && city.toUpperCase()}</h1>
          {data && data.weather && (
            <>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <h3>{data.weather[0].description}</h3>
            </>
          )}
          <h1>
            {data &&
              data.main &&
              Math.round((data.main.temp - 276 + Number.EPSILON) * 100) / 100 +
                " °C"}
          </h1>
          <p>{flag && "Have a nice day!"}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
