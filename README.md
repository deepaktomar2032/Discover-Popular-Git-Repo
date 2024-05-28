# discover-popular-repo-git


# The idea of the backend demo is to implement a backend application for discovering popular repositories on GitHub.

## Service Specification
- The service should be able to provide:
● A list of the most popular repositories, sorted by number of stars.
● An option to be able to view the top 10, 50, 100 repositories should be available.
● Given a date, the most popular repositories created from this date onwards should be returned.
● A filter for the programming language would be a great addition to have.
● Bonus task: marking repositories as favourites (kept in memory for simplicity).

## Implementation Details
- GitHub provides a public search endpoint which you can use for fetching the most popular repositories:
- https://api.github.com/search/repositories?q=created:>2019-01-10&sort=stars&order=desc

Write concise and clean code, scalability, documentation (Swagger), performance and testing


# Repo : https://github.com/deepaktomar2031/discover-popular-repo-git
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