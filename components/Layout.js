import React from "react";
import Nav from "./Nav";

export default ({ children, text }) => {
  return (
    <div>
      <Nav />
      <h1>{text}</h1>
      {children}
      <footer></footer>
    </div>
  );
};
