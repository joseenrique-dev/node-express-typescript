import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

(async () => {
  try {
    //TODO:Pending to define db credentials connection
    // const mongooseOptions: ConnectOptions ={
    //     user: config.MONGO_USER,
    //     pass:config.MONGO_PASSWORD
    // }
    console.log(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    );
    console.log('Database is connected to: ', db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
