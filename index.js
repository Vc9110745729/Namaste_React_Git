import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement(
  "h1",
  { id: "chandu", className: "heading" },
  "I'm a heading 1 from parcel man"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);