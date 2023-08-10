import { Property } from '../entities/';
import AppDataSource from '../dataSource';
import { PER_PAGE } from '../constants';

export class PropertyService {
  propertyRepository;

  constructor() {
    this.propertyRepository = AppDataSource.getRepository(Property);
  }

  /**
   * deleteProperty: delete a property
   */
  public deleteProperty(propertyId: number) {
    const builder = this.propertyRepository.createQueryBuilder('properties');
    return builder
      .delete()
      .from(Property)
      .where('id = :id', { id: propertyId })
      .execute()
      .catch((err: any) => {
        new Error(`Error while deleting property: ${err.code}`);
      });
  }

  /**
   * updateProperty: update a property
   */
  public updateProperty(propertyId: number, targetProperty: any) {
    const builder = this.propertyRepository.createQueryBuilder('properties');
    return builder
      .update(Property)
      .set({ ...targetProperty })
      .where('id = :id', { id: propertyId })
      .execute()
      .catch((err: any) => {
        new Error(`Error while updating property: ${err.code}`);
      });
  }

  /**
   * getProperties: get first 10 properties paginated
   */
  public getProperties(page: number) {
    const builder = this.propertyRepository.createQueryBuilder('properties');
    return builder
      .offset((page - 1) * PER_PAGE)
      .limit(PER_PAGE)
      .getMany()
      .catch((err: any) => {
        new Error(`Error while reading: ${err.code}`);
      });
  }

  /**
   * getPropertyById: get a property by id
   */
  public getPropertyById(propertyId: number) {
    const builder = this.propertyRepository.createQueryBuilder('properties');
    return builder
      .select('properties')
      .where('id = :id', { id: propertyId })
      .getOneOrFail()
      .catch((err: any) => {
        new Error(`Error while reading: ${err.code}`);
      });
  }

  /**
   * createProperty: create operation for properties
   */
  public createProperty(newProperty: any) {
    const builder = this.propertyRepository.createQueryBuilder('properties');
    const { address, bathrooms, bedrooms, price, type = null } = newProperty;
    return builder
      .insert()
      .into(Property)
      .values([
        {
          ...newProperty,
        },
      ])
      .execute()
      .catch((err: any) => {
        new Error(`Error while creating property: ${err.code}`);
        return;
      });
  }
}
