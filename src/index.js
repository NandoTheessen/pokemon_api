const server = require('./server');

const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
