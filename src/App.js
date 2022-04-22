import React from "react";
import { Route, Routes } from "react-router-dom";
import Destination from "./Pages/dorneFeaturedDestination/destination";
import Restuarant from "./Pages/dorneFeaturedEvents/evets";
import Events from "./Pages/dorneFeaturedRestuarant/restuarant";


function App(){
  return(
    <>
        <Header/>
        <div className="app">
          <Routes>
            <Route path="/" element={<Destination/>}/>
            <Route path="/restuarant" element={<Restuarant/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>
        </div>
    </>
  )
}
export default App;
