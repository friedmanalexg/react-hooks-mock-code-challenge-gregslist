import React,{ useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [popList, setPopList]= useState([])
  
  useEffect(() =>{
    fetch("http://localhost:6001/listings")
      .then( r=>r.json() )
      .then(listObj => {setPopList(listObj)} )
      
  },[])
  console.log(popList)
  return ( 
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
