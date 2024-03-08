import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("");

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

  useEffect(() => {
    fetchData();
  }, [city]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter city name: </label>
          <input
            type="text"
            placeholder="Enter you city name"
            onChange={handleChange}
            value={city}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <h1>{data && data.main.temp}</h1>
    </div>
  );
}

export default App;
