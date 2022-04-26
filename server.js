const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
require("./server/config/mongoose.config");
const port = 8080;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./server/routes/routes")(app);
app.listen( 8080, () => console.log(`Mi puerto esta escuchando: ${port}`) );

//dfdsfdsdsdsdsds

