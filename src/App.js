import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const[coor, setCoor] = React.useState({
    latitude: 0,
    longitude: 0
  })

  navigator.geolocation.getCurrentPosition(
    position => {
      setCoor({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
      console.log(position.coords.latitude, position.coords.longitude, '111')
    }, error => {
      console.error(error)
    }
  )
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <h1>
        {coor.latitude}
      </h1>
      <h1>
        {coor.longitude}
      </h1>

    </>
  );
}

export default App;
