import mongoose from 'mongoose';
import config from 'config';

mongoose.Promise = global.Promise;
mongoose.connect(config.get('database.uri'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error.'));
db.once('open', () => console.log('MongoDB connection established.'));

export default mongoose;
