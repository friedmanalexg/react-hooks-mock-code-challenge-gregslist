import React, {useState} from "react";

function ListingCard({description,image,location,forDelete}) {

  const [favorite, setFavorite] = useState(false)
  const [deleted, setDeleted] = useState(false)

  function handleFav(){
    setFavorite((pF)=>!pF)
  }


  function handleDelete(e){
    fetch(`http://localhost:6001/listings/${forDelete}`,{
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      }
    })
    .then((r)=>r.json())
    .then(()=>console.log("deleted!"))


    .then(setDeleted((pD)=>!pD))
}

  return (
    <li className="card" >
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
