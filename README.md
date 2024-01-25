# Raffles API

API for creating and running raffles

## API Endpoints

|  #  | Action  |                  URL                   | HTTP Verb |  CRUD  |                  Description                  |
| :-: | :-----: | :------------------------------------: | :-------: | :----: | :-------------------------------------------: |
|  1  |  Index  | /raffles |    GET    |  Read  | Get a list of the current raffles |
|  2  |  Show   |           /raffles/:id            |    GET    |  Read  |         Get an individual raffle         |
|  3  | Create  |             /raffles              |   POST    | Create |           Create a new raffle            |
|  4  | Index  |           /raffles/:id/participants            |    GET    | Read | Get participants in a raffle              |          |
|  5  | Create  |             /raffles/:id/participants              |   POST    | Create |           Add a partipant to a raffle           |


# Project README - Getting Started

Welcome to our project! Follow the steps below to get started with both the front-end and back-end components.

## Fork and Clone

1. **Fork this Repo:** Click on the "Fork" button at the top right of this repository to create your own copy.

2. **Clone the Forked Repository:** Open your terminal and run the following command, replacing `<your-username>` with your GitHub username.
    ```bash
    git clone https://github.com/<your-username>/talia-pichardo-takehome-polleverywhere-backend.git
    ```

3. **Navigate to the Directory:**
    ```bash
    cd talia-pichardo-takehome-polleverywhere-backend.git
    ```

## Dependencies
4. **Install Dependencies:**
   ```bash
   npm install

## Database 
5. **Database Setup:**
   ```bash
   npm run db:init
npm run db:crypto
npm run db:seed

## Start App!
```bash
   npm start
