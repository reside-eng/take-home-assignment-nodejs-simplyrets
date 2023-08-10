import { Request, Response } from 'express';
import { Property } from '../entities/';
import { PropertyService } from '../services';
import AppDataSource from '../dataSource';

async function create(req: Request, res: Response) {
  const propertyService = new PropertyService();
  const { address, bathrooms, bedrooms, price, type = null } = req?.body;

  const result = await propertyService.createProperty({
    address,
    price,
    bedrooms,
    bathrooms,
    type,
  });

  if (result && result?.identifiers.length > 0)
    res.status(200).json({ identifiers: result?.identifiers });
  else res.sendStatus(400);
}

async function getById(req: Request, res: Response) {
  const propertyService = new PropertyService();
  const propertyId = parseInt(req.params?.id);
  const result = await propertyService.getPropertyById(propertyId);
  if (result) res.send(result);
  else res.sendStatus(404);
}

async function index(req: Request, res: Response) {
  const propertyService = new PropertyService();

  // Setup page number for pagination strategy with query builder
  const page: number = parseInt(req.query?.page as any) || 1;
  const result = await propertyService.getProperties(page);

  if (result) res.send(result);
  else res.sendStatus(404);
}

async function update(req: Request, res: Response) {
  const propertyId = parseInt(req.params?.id);
  const propertyService = new PropertyService();

  const { address, bathrooms, bedrooms, price, type = null } = req?.body;

  const result = await propertyService.updateProperty(propertyId, {
    address,
    price,
    bedrooms,
    bathrooms,
    type,
  });

  if (result?.affected && result?.affected > 0) res.sendStatus(200);
  else {
    // TODO: check if this is the proper status code
    // cant remember so far what status code should return
    // if the DB returns that 0 rows where affected
    res.sendStatus(400);
  }
}

async function remove(req: Request, res: Response) {
  const propertyId = parseInt(req.params?.id);
  const propertyService = new PropertyService();

  //TODO: Implementing a soft delete strategy could avoid
  // future problems for users if they accidentally delete a record
  const result = await propertyService.deleteProperty(propertyId);

  if (result?.affected && result?.affected > 0) res.sendStatus(200);
  else {
    // TODO: check if this is the proper status code
    res.sendStatus(400);
  }
}

export default {
  create,
  getById,
  index,
  remove,
  update,
};
