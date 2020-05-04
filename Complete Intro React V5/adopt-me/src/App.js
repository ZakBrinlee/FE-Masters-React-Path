import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt ME!</h1>
      <Pet name="Chica" animal="Dog" breed="Dachshund" />
      <Pet name="Chloe" animal="Cat" breed="Mix" />
      <Pet name="Cedar" animal="Cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
