import React from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({popList}) {
  //console.log(popList)

  return (
    <main>
      {popList.map((list)=> 
    
      <ul className="cards">
        <ListingCard key={list.id} description = {list.description} image={list.image} location ={list.location}/>
      </ul>  )}
    </main>
  );
}

export default ListingsContainer;
