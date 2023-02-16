
import React, { useState, useEffect } from "react";
import TeaList from "./TeaList";
import "./styles/TeaPage.css";


function TeaPage() {
  const [userTea, setUserTea] = useState([])

  const [brand, setBrand] = useState("")
  const [style, setStyle] = useState("")
  const [origin, setOrigin] = useState("")
  const [image, setImage] = useState("")

  // Fetch request for TEA
  useEffect(() => {
    fetch("http://localhost:4000/teas")
      .then(resp => resp.json())
      .then(teas => teaItems(teas))
  }, [])

  const teaItems = (teas) => {
    setUserTea(teas)
  }



  const handleSubmit = (e) => {
    e.preventDefault()
  

  let newTea = {
    brand: brand,
    style: style,
    origin: origin,
    image: image
  }

  // Post request for TEA
  fetch("http://localhost:4000/teas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTea),
    })
      .then(resp => resp.json())
      .then(console.log);
  }





  return (
    <div className="tea-text">
      <h1>Teas!!</h1>
      <TeaList userTea={userTea}/>

      <form onSubmit={handleSubmit}className="tea-form">
        <input type="text" name="brand" placeholder="Brand name" value={brand} onChange={(e) => setBrand(e.target.value)} />
        <input type="text" name="style" placeholder="Style of tea" value={style} onChange={(e) => setStyle(e.target.value)} />
        <input type="text" name="origin" placeholder="Origin of company" value={origin} onChange={(e) => setOrigin(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add a new TEA</button>
      </form>

    </div>
  );
}

export default TeaPage;