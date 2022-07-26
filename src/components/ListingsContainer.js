import React from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({popList}) {
  //console.log(popList)

  return (
    <main>
      <ul className="cards">
      
        {popList.map((list)=> 
          <ListingCard key={list.id} forDelete ={list.id} description = {list.description} image={list.image} location ={list.location}/>
        )}

      </ul> 
    </main>
  );
}

export default ListingsContainer;
