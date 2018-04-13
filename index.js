import config from 'config';
import app from './config/express';

const host = config.get('server.host');
const port = config.get('server.port');

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
