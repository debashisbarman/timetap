import http from 'http';
import config from 'config';
import app from './config/express';

const host = config.get('server.host');
const port = config.get('server.port');

const server = http.createServer(app);
server.listen(process.env.PORT || port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
