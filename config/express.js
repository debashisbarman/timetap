import express from 'express';
import expressValidation from 'express-validation';
import bodyParser from 'body-parser';
import morgan from 'morgan'; // eslint-disable-next-line
import mongoose from './mongodb';
import routes from '../routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use('/api', routes);
app.all('*', (req, res) =>
  res.status(404).json({ success: false, params: { message: 'Not found, invalid route.' } }));
app.use((error, req, res) => {
  if (error instanceof expressValidation.ValidationError) {
    res.status(error.status).json({
      success: false,
      params: {
        message: error.errors
      }
    });
  }
  else {
    res.status(error.status).json({
      success: false,
      params: {
        message: error.message
      }
    });
  }
});

export default app;
