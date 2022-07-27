import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const listingsURL = "http://localhost:6001/listings"

function App() {

  const [listings, setListings] = useState([]) 

  const removeListing = id => {
    fetch (`${listingsURL}/${id}`,{
      method: "DELETE" 
    })
      .then( () => {
        const newListings = listings.filter(listingObj => listingObj.id !== id)
        setListings(newListings)
      })
  }

  const [search, setSearch]= useState('')

  console.log(listings)
  useEffect(() => {
    fetch(listingsURL)
      .then( r => r.json())
      .then( listingsArray => setListings(listingsArray))
  } ,[])

  const submitSearch =someString => setSearch(someString)
  

  const searchedListings = listings.filter( listingObj => 
    listingObj.description.toLowerCase().includes( search.toLowerCase())
  )

  return (
    <div className="app">
      <Header submitSearch={submitSearch}/>
      <ListingsContainer removeListing={removeListing} listings={searchedListings} />
    </div>
  );
}

export default App;
