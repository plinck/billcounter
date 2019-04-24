const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


require("./routes/api-billcount-routes.js")(app);


//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`)
});