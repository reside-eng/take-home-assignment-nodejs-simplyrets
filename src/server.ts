import { DataSource } from 'typeorm';
const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'property.db',
    entities: ['./entities/Property.js'], // path to your entity classes
    synchronize: true, // synchronize the database schema with the entity classes
})

AppDataSource.initialize()
export default AppDataSource;