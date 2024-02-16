const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const port = 3000 || process.env.PORT;

const app = express();
app.set("port", port);
app.use(bodyParser.json());
app.use(routes);

const server = http.createServer(app);
server.listen(port);
console.log(`Server listening at http://localhost:${port}`);
