# Bread API

API for budgeting application


[Live API](https://thawing-woodland-27640.herokuapp.com/)

## API Endpoints
| #      | Action      | URL                                | HTTP Verb  | CRUD   | Description                                   |
| :----: | :----:      | :----:                             | :----:     | :----: | :----:                                        |
| 1      | Index       | /transactions?currentUserId=userId | GET        | Read   | Get a list of the current user's transactions |
| 2      | Show        | /transactions/:id                  | GET        | Read   | Get an individual transaction                 |
| 3      | Create      | /transactions                      | POST       | Create | Create a new transaction                      |
| 4      | Destroy     | /transactions/:id                  | DELETE     | Delete | Delete a transaction                          |
| 5      | Update      | /transactions/:id                  | PUT        | Update | Update a transaction                          |
