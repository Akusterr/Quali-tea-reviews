
import React, { useState, useEffect } from "react";
import TeaList from "./TeaList";
import "./styles/TeaPage.css";


function TeaPage() {
  const [userTea, setUserTea] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/teas")
      .then(resp => resp.json())
      .then(teas => teaItems(teas))
  }, [])

  const teaItems = (teas) => {
    setUserTea(teas)
  }


  return (
    <div className="tea-text">
      <h1>Teas</h1>
      <TeaList userTea={userTea}/>
    </div>
  );
}

export default TeaPage;