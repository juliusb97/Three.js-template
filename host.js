const express = require("express")
const app = express();
const PORT = 8080;


app.use(express.static(".\\build\\"));

app.listen(PORT, () => {
    console.log("Serving content");
});