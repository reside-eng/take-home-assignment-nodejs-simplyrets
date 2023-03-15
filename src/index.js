
import express from "express";
import { AppDataSource } from "./server.js"
import { router } from "./routes/propertyRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/properties', router);
AppDataSource.initialize().then(() => {
  console.log('Database connected')
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error during Data Source initialization", err)
})

