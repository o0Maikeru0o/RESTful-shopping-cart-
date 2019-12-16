# RESTful-shopping-cart
A simple shopping cart application that allows adding and removing of several fruit items to a persistant cart issued by the server using a session id

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

No prerequisites necessary if running in Node.js

### Installing

Run command `npm install` from the console in this application's directory to install Node module dependencies

Run command `npm start` from the console in this application's directory to start the Express server with Nodemon monitoring changes.

Run command `npm run build` from the console in this application's directory to run Webpack for bundling and compiling with Babel

-The default port for the server is 1337

## Running the tests

Run command `npm test` to begin unit tests with Jest

## API End points

// Retreive current cart

    Get to '/cart'

// Retreive current inventory

    Get to '/inventory'

// Create a new cart if none exists

    Post to '/create'

// Add or remove items from the cart

    Post to '/add'

    Data sent in body of http request as {id: string, quantity: number}

// Clear the cart and reset totals

    Delete to '/clear'


## Configuration

All initialization variables can be found in the config.js file
