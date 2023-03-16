
import express from "express";
import AppDataSource from "./dataSource"
import { router } from "./routes/propertyRoutes"
import { Property } from './entities/Property'

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/properties', router);

AppDataSource.initialize().then(async () => {
  console.log('Database connected')
  
  const property = await AppDataSource.manager.find(Property)
  console.log("Loaded property: ", property)

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error during Data Source initialization", err)
})

