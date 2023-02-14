import React from "react";
import Teacard from "./Teacard";

function TeaList({ userTea }) {
 

  return (
    <ul>
      {userTea.map(UT => (
        <Teacard key={UT.id} UT={UT}/>
      ))}

    </ul>
  );
}

export default TeaList;