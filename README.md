Please read the PLEASE_READ_FIRST.md first.

Please document your code & design decisions here.

First findings after running `npm install` and checking project folder structure:

- There is a src/routes/**tests**/propertyRoutes.spec.ts file that looks like a good start point to add proper unit tests for the rest of the endpoints required for this exercise.
- There is a src/routes/propertyRoutes.ts where routes required are already defined with placeholder responses.

Decision #1 would be start completing Unit test from there as well as developing from those footprints.

Decision #2: Added controller folder to add one more abstraction layer so then controller would delegate business logic and data operations to service layer (already created on services/PropertyService).

Decision: #3: For pagination on GET /properties using typeorm query builder to make use of the offset method. Endpoint url would return one page at a time with 10 results. To implement pagination use `page` parameter on url: `/properties?page=3`

```
NOTE that it may not work as you expect if you are using joins.
   * If you want to implement pagination, and you are having join in your query,
   * then use instead skip method instead.
```

Decision #4: I'm creating an instance of the property service for now to finish the exercise but instead of this would be nice to use it in a different way having to create a new instance
