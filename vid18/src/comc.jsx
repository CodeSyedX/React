import React, { useContext } from "react";
import { UserContext } from "./coma.jsx";
import ComponentD from "./comad.jsx";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h2>Component-C</h2>
      <h3>{`Hello Again, ${user}`}</h3>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
