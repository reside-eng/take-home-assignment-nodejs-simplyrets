import express from 'express';
import bodyParser from 'body-parser';
import controller from '../controllers/propertyController';

export const propertyRoutes = express.Router();

propertyRoutes.use(bodyParser.json());
propertyRoutes.use(bodyParser.urlencoded({ extended: true }));

propertyRoutes.get('/', controller.index);

propertyRoutes.get('/:id', controller.getById);

propertyRoutes.post('/', controller.create);

propertyRoutes.put('/:id', controller.update);

propertyRoutes.delete('/:id', controller.remove);
