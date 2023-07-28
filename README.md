create a postgres database
Run command on terminal inside your database  -  <create schema main;>

establish a setup with database by create .env file
run knex migrate:latest
npm start or nodemon app.js

<<<<<<<<<<<< server will start >>>>>>>>>>>>>>

1. Only users with the 'admin' role can delete candidates and their associated book records.

2. The 'admin' role ensures that sensitive operations are restricted to authorized users only.

3. The server provides pagination support for large collections of candidate data.

## API Documentation

API documentation is available at http://localhost:8000/api-docs/.  


