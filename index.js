const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

<style>
  .navbar 
    overflow: hidden;
    background-color: #13274F;

  .navbar a 
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

  .navbar a:hover 
    background-color: #ddd;
    color: black;

  .dropdown 
    float: left;
    overflow: hidden;

  .dropdown .dropbtn 
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 0px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;

  .navbar a,
  .dropdown .dropbtn 
    display: inline-block;

  .dropdown-content 
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

  .dropdown-content a 
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

  .dropdown-content a:hover 
    background-color: #1ca9c9;

  .dropdown:hover .dropdown-content 
    display: block;
</style>