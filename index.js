const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, welcome to Nodejs programming');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

-- learning to Express application generator
https://expressjs.com/en/starter/generator.html
http://atmarkcafe.org/tieng-viet-viet-responsive-web-voi-skeleton/?lang=vi
