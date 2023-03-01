// server/index.js

const express = require("express"); // We add the "library" express
const PORT = process.env.PORT || 3001; // We define the port number
const app = express(); // Create the layout

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
