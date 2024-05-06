# verkstedt-coding-demo

# Repo : https://github.com/deepaktomar2031/verkstedt-coding-demo
## Branch:
- Main Branch - `master`


# Run Project locally
- clone the project
- Install dependencies using `npm install`
- Run the project locally in development mode using `npm run dev`
    - It will run the server on port 8000 & api is available to consume
    - GET - http://localhost:8000/api/popular-repo?createdFrom=2024-01-01
    - POST - http://localhost:8000/api/favourite-repo/:id
    - DELETE - http://localhost:8000/api/favourite-repo/:id
    - GET - http://localhost:8000/api/favourite-repo
    - SWAGGER DOC - http://localhost:8000/api-docs


# Build project
- `npm run build`


# Build & Run the project
- `npm run start`


# Run Unit Tests
- `npm test`


# Project Structure
    - docs/
        - diagram/
            - Project flow diagram
        - Swagger/
            - Swagger API documentation
    - src/
        - index.ts - entry point of the project, server.ts helps to create the server
        - routes.ts - has routes to the API end-point
        - controller/ - has controller to make calculation & serve the reqest
        - helper/ - has helper functions & class to help the controller in serving the request
        - validator/ - has a validator schema to validate the query param
        - middleware/ - has a middleware to validate the incoming request using above validator
        - Interface/ - has interface used in project
        - constant/ - has all constants & string used in project
        - utils/ - has common functionality to be used through out the project (messages, statusCodes & error handler)
    - test/
        - Unit tests to test the project