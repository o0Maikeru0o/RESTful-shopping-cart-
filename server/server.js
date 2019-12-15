const express = require('express');
const session = require('express-session');
const parser = require('body-parser');

const app = express();
const PORT = 1337;

app.use(session({
  secret: 'F98A3A2945EEE',
}));
app.use(parser.json());
app.use('/', express.static(`${__dirname}/../public`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/api', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views += 1;
    res.send(`You visited this page ${req.session.page_views} times`);
  } else {
    req.session.page_views = 1;
    res.send('Welcome to this page for the first time!');
  }
});
