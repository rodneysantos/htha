# HTHA Developer - Coding Exercise

## Setting up the project
#### Prerequisites:
- Node.js (version 24.x)
  - (Optional) nvm (Node Version Manager) to manage Node.js versions
- NPM (Node Package Manager)
- Git
- (Optional) Postman or any API testing tool

#### Steps to run the project:
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd htha`
3. Install dependencies: `npm install`
4. Set up the database, see below for instructions.
5. Start the development server: `npm start`

#### Setting up the database:
Note: Only do this the first time.
1. Run the database migration and seeding: `npm run db:up`

#### Additional NPM scripts:
- `npm run db:generate` - Generate migration files based on schema changes.
- `npm run db:reset` - Reset the database (deletes ./pglite directory and recreates them).
- `npm run db:seed` - Seed the database with initial data.
- `npm test` - Run tests.
- `npm run test:cov` - Run tests with coverage report.

#### Resources:
- [Postman Collection]([https://.postman.co/workspace/My-Workspace~7ef92a01-1c91-442c-8ae8-f1fc93ebb8cc/collection/19171318-ae9d7f03-135e-486a-9c99-944d0fdc5072?action=share&creator=19171318&active-environment=19171318-3ab92caf-7d14-4063-bdf6-fc74be9fad54](https://www.postman.com/aviation-geologist-26301703/workspace/chris-public-apis/collection/19171318-ae9d7f03-135e-486a-9c99-944d0fdc5072?action=share&creator=19171318))

## Directory Structure
```shell
.
└── htha/
    ├── src/
    │   ├── constants/      # Application constants - for easy management
    │   ├── database/       # Database connection and models
    │   ├── health-check/   # Health check endpoint
    │   ├── properties/     # Property-related modules
    │   └── app.ts          # Entry point of the application
    ├── tests/              # Test files
    └── types/              # TypeScript type definitions
```

## Coding Exercise
### Requirements: Design & Build an API for adding and searching properties for sale.
- Endpoint to add property with address, sale price, and description.
- Endpoint to search properties using an optional suburb filter.
- Search results must include the property address, sale price and some kind
of field to indicate if the property is above, below or equal to the avg price
for properties in the suburb.

### Additional Information:
- Currently there is no requirement to use a database (i.e. in memory storage is fine).
However, if we had millions of properties, describe any further considerations (if any) that
would you make to the design.
Notes:
- Whilst you can implement the solution in any language, the preference is nodejs
(you can use express or equivalent as a local web server).
- Please ensure you structure your code and include an appropriate level of testing as
though you’re writing for production.
- Please note down any assumptions you make.

---

### Assumptions
- I would assume that I'm not limited to the fields mentioned and can add if needed (e.g., ID).
- It's possible we don't get a property that matches the average price exactly. To get a more accurate sale price position, I would use the quartile method.

### Considerations
- Use PostgreSQL for better performance instead of in-memory storage.
- Add a `suburb` column + index to the properties table for efficient filtering.
- My initial thought was to calculate the average price by using `SUM()` and `COUNT()` SQL functions.
However, this could get immediately become inaccurate and misleading when a really expesive property is added.
For example, if there are 10 properties, each $100,000 and one $10,000,000, the average would be $1,090,000,
which does not represent the market accurately. A better approach would be to use the quartile method.
- To get the below/above/averagean, I would compare the property price with the upper and lower quartile prices. Anything between Q1 and Q3 would be considered "average".
- I would also consider adding pagination to the search endpoint to prevent loading too many properties at once.

### Tasks
- [x] Create a new repository on GitHub and push the code.
- [x] Include a README.md file with instructions on how to run the code and tests.
- [x] Create a list of properties in a JSON file as mock data.
- [x] Create a GET endpoint of `/properties`
- [x] Add a search filter by suburb to the GET endpoint.
- [x] Calculate the median sale price for the suburb and include it in the response.
- [x] Create a POST endpoint of `/properties` to add a new property.
- [ ] Validate the input data for the POST endpoint.
- [ ] Use pino or equivalent for logging.
