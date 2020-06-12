import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TeslaBatteryContainer from "./containers/TeslaBattery";

function App() {
  return (
    <div>
      <Header />
      <TeslaBatteryContainer />
    </div>
  );
}

export default App;
