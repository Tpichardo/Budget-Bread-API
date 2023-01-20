# Bread API

API for budgeting application

[Live API](https://budget-bread-api.onrender.com)

## API Endpoints

|  #  | Action  |                  URL                   | HTTP Verb |  CRUD  |                  Description                  |
| :-: | :-----: | :------------------------------------: | :-------: | :----: | :-------------------------------------------: |
|  1  |  Index  | /transactions?current_user_id={userId} |    GET    |  Read  | Get a list of the current user's transactions |
|  2  |  Show   |           /transactions/:id            |    GET    |  Read  |         Get an individual transaction         |
|  3  | Create  |             /transactions              |   POST    | Create |           Create a new transaction            |
|  4  | Update  |           /transactions/:id            |    PUT    | Update |             Update a transaction              |
|  5  | Destroy |           /transactions/:id            |  DELETE   | Delete |             Delete a transaction              |
