import express from 'express';
import { propertyRoutes } from './routes';

const app = express();
app.use('/', (req, res) => {
  res.send('Some third message')
});
app.use('/properties', propertyRoutes);

export default app;
