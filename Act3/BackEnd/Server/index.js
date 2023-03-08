const fs = require('fs');
const bodyParser = require('body-parser');
const express = require("express"); // We add the "library" express

const PORT = process.env.PORT || 3001; // We define the port number
const app = express(); // Create the layout
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json("This is gonna be just a message :)")
});

app.get("/api/posts", (req, res) => {
    fs.readFile(__dirname + "/" + "post.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.post("/api/posts", (req, res) => {
    console.log('El cuerpo de la peticion:', req.body);
    res.sendStatus(201);
  });
// Callback to open the port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
