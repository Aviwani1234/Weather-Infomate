import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiKey = "61efc3ca35c4e15351f6ae364fd1c597";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
  const [data, setData] = useState();

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
      {Array.isArray(data) &&
        data.map((dataObj, index) => {
          return <h1 key={index}>{dataObj.city.name}</h1>;
        })}
    </div>
  );
}

export default App;
