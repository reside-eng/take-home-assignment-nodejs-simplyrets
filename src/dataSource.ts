import { DataSource } from 'typeorm';
import { Property } from './entities/Property'

const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'property.db',
    entities: [Property],
    synchronize: true, // synchronize the database schema with the entity classes
})

export default AppDataSource;