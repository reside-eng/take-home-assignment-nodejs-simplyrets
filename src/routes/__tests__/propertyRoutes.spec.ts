import request from 'supertest';
import app from '../../app';
import AppDataSource, { seedDb } from '../../dataSource';
import { PER_PAGE } from '../../constants';

describe('propertyRoutes', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
    await seedDb();
  });

  describe('GET /properties', () => {
    it(`should (READ) return first ${PER_PAGE} paginated properties`, async () => {
      const response = await request(app).get('/properties');
      // For some reasong i'm getting the result array as a string
      // so I'll do some json parsing an maybe
      // TODO: add proper error handling if some day that
      // string is not a valid JSON anymore
      const data = JSON.parse(response.text);
      expect(data.length).toBe(PER_PAGE);
    });
  });

  describe('GET /properties/:id', () => {
    it('should (READ) return a property by id = 2', async () => {
      // Selecting the second property item on the list to validate address
      const EXPECTED_ADDRESS_VALUE = '8369 West MAJESTY STREET Path #1765';
      const response = await request(app).get('/properties/2');
      const data = JSON.parse(response.text);
      expect(data.address).toBe(EXPECTED_ADDRESS_VALUE);
    });
  });

  describe('POST /properties', () => {
    it('should (CREATE) a property and return the identifier', async () => {
      const response = await request(app).post('/properties').send({
        address: '5555 SSSS Tucuman  #I-7',
        price: 3333,
        bedrooms: 4,
        bathrooms: 4,
        type: null,
      });
      const result = JSON.parse(response.text);
      expect(result.identifiers?.length).toBe(1);
    });
  });

  describe('PUT /properties', () => {
    it('should (UPDATE) a property after creating it', async () => {
      const createResponse = await request(app).post('/properties').send({
        address: '5555 North Tucuman  #I-7',
        price: 3333,
        bedrooms: 4,
        bathrooms: 4,
        type: null,
      });
      const newProperty = JSON.parse(createResponse.text);
      const newPropertyId = newProperty.identifiers[0].id;

      const updateResponse = await request(app)
        .put(`/properties/${newPropertyId}`)
        .send({
          price: 8734783,
          bathrooms: 44,
        });
      //TODO: Not sure if gettin an 'OK' string is the
      // best solution. Could be improved to have a better feedback
      expect(updateResponse.text).toBe('OK');
    });
  });

  describe('DELETE /properties', () => {
    it('should (DELETE) a property after creating it', async () => {
      const createResponse = await request(app).post('/properties').send({
        address: '5555 North Tucuman  #I-7',
        price: 3333,
        bedrooms: 4,
        bathrooms: 4,
        type: null,
      });
      const newProperty = JSON.parse(createResponse.text);
      const newPropertyId = newProperty.identifiers[0].id;

      const response = await request(app).delete(
        `/properties/${newPropertyId}`,
      );

      //TODO: Not sure if gettin an 'OK' string is the
      // best solution. Could be improved to have a better feedback
      expect(response.text).toBe('OK');
    });
  });
});
