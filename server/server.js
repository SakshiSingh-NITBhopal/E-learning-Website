const express = require('express');

const app = express();
//Setup port from the .env later
const PORT = 8000;
app.use(express.json());
app.listen(PORT, () => console.log("Running on port : ", PORT));