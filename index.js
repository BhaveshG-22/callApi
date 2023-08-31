const express = require("express");
const app = express();
const dotenv = require("dotenv");

const PORT = process.env.PORT || 2010;
app.listen(PORT, () => {
  console.log(`Server Started on PORT:${PORT}`);
});

function call(time) {
  setInterval(async () => {
    try {
      const response = await fetch(
        "https://onlinetictactoe-server.onrender.com/"
      );
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, time);
}

call(2000);
