const express = require("express");

const routes = require('./routes');
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('./public'))
app.use(express.json())

app.use('/', routes)


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
