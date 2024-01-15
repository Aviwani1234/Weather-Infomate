import { useState } from "react";
import "./App.css";

function App() {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4b34bf8172088dd335293ce3d0738c78";
  const [data, setData] = useState();

  const fetchData = () => {
    return fetch(url)
    .then((res) => res.json())
    .then((d) => setData(d))
  };

  fetchData();

  return (<div className="App">
      {data.map((dataObj, index) => {
        return(
            <h1>{dataObj.city.name}</h1>
        )
      })}
  </div>);
}

export default App;
