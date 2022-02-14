import React from "react";
import Nav from "./Nav";

export default ({ children, text }) => {
  return (
    <div>
      <Nav />
      {children}
      <footer></footer>
    </div>
  );
};
