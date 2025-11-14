const app = require('./app');
const Database = require('./configuration/database');
const User = require('./model/user.model');

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Varsha');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}   );