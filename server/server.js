const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = 1337;


app.use(parser.json());
app.use('/', express.static(`${__dirname}/../public`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
