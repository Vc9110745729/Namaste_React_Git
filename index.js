import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement(
  "h1",
  { id: "chandu", className: "heading" },
  "I'm a heading 1 from parcel man !"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
/*
// HMR-hot module reploading
// file wather algorithm
// bundling
// cleaning our code 
// dev production build
// super fast build algorithm
// caching while development
// compression of files
// renaming the variables
// older version of browser support
// id adds pollyfills
// we can just build our app on local machine and deploy the dist folder to the server
// https on dev

*/