import React from "react";

function Footer(){

 var d = new Date();
 var Year = d.getFullYear();
    return (
      <footer>
        <p>copyright {Year}</p>
      </footer> );
}

export default Footer;