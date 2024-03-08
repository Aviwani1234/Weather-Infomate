import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  
  const apiKey = "61efc3ca35c4e15351f6ae364fd1c597";
  const city = "mumbai";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  

  useEffect(() => {
    const fetchData = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch((error) => console.log("Error fetching data : ", error));
    };

    fetchData();
  }, [url]);

  return (
    <div className="App">
      <h1>{data && data.main.temp}</h1>
    </div>
  );
}

export default App;
