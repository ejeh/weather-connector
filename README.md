# STERLING PRODUCT Back-End

This is a project for the STERLING PRODUCT [interview task] backend

- Authentication; this returns a signed JWT

## Usage

1. Clone the Repo

> git clone https://github.com/ejeh/Mock-Premier-League.git

2. Install Dependencies

> npm install

4. Test the App

> npm test

4. Build and Serve App

> npm run start

5. Run docker
   > docker-compose up

- `GET http://localhost:4000/`

## Routes

In this project there are several routes (one public route and the others are protected routes) and are as follows:

# Root route

- `GET http://localhost:3000`

## Admin routes

Admin signup

- `POST http://localhost:3000/api/v1/authenticate/email/admin/signup` for the signup function
  Example Request body:
  `javascript { email: 'email', password: 'password' }`
  Admin login

- `POST http://localhost:3000/api/v1/authencation/email/admin/login` for the login function. This also signs a JSON Web Token for use in the other routes.
  Example Request body:
  ```javascript
      {
          email: 'email',
          password: 'password'
  ```

Protected Routes

To access these routes you must first login as an admin

Retrieve a single record with a given adminId

- `get http://localhost:3000/api/v1/admins/:adminId`

Retrieve and return all records from the database.

- `get http://localhost:3000/api/v1/admins`

Update a admin identified by the adminId

- `put http://localhost:3000/api/v1/admins`
  Example Request body:
  ```javascript
      {
          email: 'email',
          password: 'password',
          firstName: "firstName",
          lastName: "lastName"
      }
  ```

Delete a admin with the specified adminId in the request

- `delete http://localhost:3000/api/v1/admins/:adminId`

## User Routes

User signup

- `POST http://localhost:3000/api/v1/authenticate/email/user/signup` for the signup function
  Example Request body:
  `javascript { email: 'email', password: 'password' }`

  User login

- `POST http://localhost:3000/api/v1/authencation/email/user/login` for the login function. This also signs a JSON Web Token for use in the other routes.
  Example Request body:
  ```javascript
      {
          email: 'email',
          password: 'password'
      }
  ```

## Protected Routes

To access these routes you must first login as a user

Retrieve a single record with a given userId

- `get http://localhost:3000/api/v1/user/:userId`

Retrieve and return all records from the database

- `get http://localhost:3000/api/v1/users`

Update a admin identified by the userId

- `put http://localhost:3000/api/v1/user`
  Example Request body:
  ```javascript
      {
          email: 'email',
          password: 'password',
          firstName: "firstName",
          lastName: "lastName"
      }
  ```

Delete a admin with the specified adminId in the request

- `delete http://localhost:3000/api/v1/user/:userId`

## Fixtures Routes

# Public Route

Find searched Fixtures

- `get http://localhost:3000/api/v1/fixtures/search` for function. This takes in a query parameter.

for Example http://localhost:3000/api/v1/fixtures/search?q=arsenal

populate db
Make sure you have "Elasticsearch" install locally to get statrted

- `get http://localhost:3000/api/v1/init/fixtures`

# Protected Routes

To access these routes you must first login as an admin

Retrieve a single record with a given fixturesId

- `get http://localhost:3000/api/v1/fixture/:fixtureId`

Retrieve and return all records from the database.

- `get http://localhost:3000/api/v1/fixtures/admin`

Create a fixture

- `post http://localhost:3000/api/v1/fixtures`
  Example Request body:

  ````javascript
  {
  "venue": "St. James' Park (Newcastle upon Tyne)",
  "round": "Regular Season - 5",
  "awayTeam": {
  "team_name": "Arsenal"
  },
  "event_date": "2018-09-15T14:00:00+00:00",
  "homeTeam": {
  "team_name": "Newcastle United"
  },
  "referee": "L. Probert",
  "firstHalfStart": 1537020000

          }
      ```
  popuate db

  ````

- `get http://localhost:3000/api/v1/init/teams`

Update a fixtures identified by the fixturesId in the request

- `put http://localhost:3000/api/v1/fixture/:fixtureId`

Example Request body:

````javascript
{
"venue": "St. James' Park (Newcastle upon Tyne)",
"round": "Regular Season - 5",
"awayTeam": {
"team_name": "Arsenal"
},
"event_date": "2018-09-15T14:00:00+00:00",
"homeTeam": {
"team_name": "Newcastle United"
},
"referee": "L. Probert",
"firstHalfStart": 1537020000

        }
    ```

Delete a fixture with the specified fixtureId in the request

- `delete http://localhost:3000/api/v1/fixture/:fixtureId`

# Protected Route

To access this routes you must first login as an user

Retrieve all completed fixtures

- `get http://localhost:3000/api/v1/fixtures/completed/user`

Retrieve all pending fixtures

- `get http://localhost:3000/api/v1/fixtures/pending/user`

Retrieve and return all records from the database.

- `get http://localhost:3000/api/v1/fixtures/user`

## Teams Routes

# Public Route

Find searched Teams

- `get http://localhost:3000/api/v1/teams/search` for function. This takes in a query parameter.

for Example http://localhost:3000/api/v1/teams/search?q=arsenal

# Protected Routes

To access these routes you must first login as an admin or a user

Retrieve and return all records from the database.

- `get http://localhost:3000/api/v1/teams/admin`

- `get http://localhost:3000/api/v1/teams/user`

Retrieve a single record with a given teamId

- `get http://localhost:3000/api/v1/team/admin/:teamId`

- `get http://localhost:3000/api/v1/team/user/:teamId`

To access these routes you first login as an admin
Create a team
- `post http://localhost:3000/api/v1/teams`
Example Request body:

```javascript
name: "Cardiff City",
founded: 1895,
country: "Wales",
venue_name: "Cardiff City Stadium"
venue_surface: "grass"
venue_address: "Leckwith Road"
venue_city: "Caerdydd"
venue_capacity:"33280"
code:"24225"
        }
```

Update a team identified by the adminId in the request
- `put http://localhost:3000/api/v1/teams/:teamId`
Example Request body:

```javascript
name: "Cardiff City",
founded: 1895,
country: "Wales",
venue_name: "Cardiff City Stadium"
venue_surface: "grass"
venue_address: "Leckwith Road"
venue_city: "Caerdydd"
venue_capacity:"33280"
code:"24225"
        }
```
Delete a team with the specified teamId in the request

- `delete http://localhost:3000/api/v1/teams/:teamId`
````
