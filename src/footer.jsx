import React from "react";

function Footer() {
  var dt = new Date().getFullYear();
  return (
    <footer>
      <p>copyright {dt}</p>
    </footer>
  );
}
export default Footer;
