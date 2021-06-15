//Dependencies
const app = require("./app")

require("dotenv").config();
//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;


//Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));