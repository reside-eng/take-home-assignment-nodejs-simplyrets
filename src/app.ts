import express from 'express';
import { propertyRoutes } from './routes';

const app = express();
// Index route
app.use('/', (req, res) => {
  res.send('Visit "/properties" to load properties')
});

// Properties route
app.use('/properties', propertyRoutes);

export default app;
