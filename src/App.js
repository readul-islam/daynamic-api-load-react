import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const styleData = {
  color: "blue",
  display: "grid",
};

function App() {
  return (
    <div className="" Name="App">
      <Apiload></Apiload>

      <div style={styleData}>
        <Displayload></Displayload>
      </div>
    </div>
  );
}
function Apiload() {
  const [api, setApi] = useState([]);
  // console.log(api);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <div>
      <h1>{api.length}</h1>
     <div className="display">
     {api.map((info) => (
        <Displayload
          name={info.name.common}
          flags={info.flags.png}
          population={info.population}
        ></Displayload>
      ))}
     </div>
    </div>
  );
}
function Displayload(props) {
  return (
    <section >
      <div className="card">
        <img src={props.flags} alt="..." />

        <h1>{props.name}</h1>
        <h4 style = {{color:'red'}}>Population:{props.population}</h4>
        <p>This is a longer card with supporting text below as a .</p>
      </div>
    </section>
  );
}

export default App;
