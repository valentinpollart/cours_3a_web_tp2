# TP2: Introduction to NestJS

NestJS documentation website: https://docs.nestjs.com

## 🚀 Goal

The goal of this TP is create a simple Rest API exposing the Bookshelf implemented in TP1.
The API will have the following routes:

## 🕸 Routes

Get all the books stored in the Bookshelf:
  - Method: GET
  - Route: /books
  
--

Create a book:
  - Method: POST
  - Route: /books
  - Body:
  ```javascript
  {
    "title": "A_TITLE",
    "author": "A_NAME",
    "date": "A_DATE"
  }
  ```
--

Get a book with its name:
  - Method: GET
  - Route: /books/[TITLE_OF_THE_BOOK]
 
--

Get all books of a given author
  - Method: GET
  - Route: /books?author=[NAME_OF_THE_AUTHOR]
 
--
 
Delete a book with its name:
  - Method: DELETE
  - Route: /books/[TITLE_OF_THE_BOOK]
  
 
---

To guide you and help you find out if everything is ✅ a test suite is available in `./Bookshelf.test.ts`.
These tests can be ran using Jest in command line or inside your IDE.

## Getting Started

Open a terminal, go to the directory of this TP and run the following commands:

```sh
# This will install all needed dependencies
npm install

# This will run the tests once
npm run test

OR

# This will run the tests everytime a change is made in the source code
npm run test:watch

# This will build the source and put the transpiled code in `/dist` directory
npm run build

# This will start the API 
npm run start:dev
```

That's it! You can code!

## Extra:

- Add an endpoint to search a book based on a part of the title/the author:
   - Method: POST
   - Route: /books/search
   - Body:
   ```javascript
   {
     "term": "A_TITLE"
   }
   ```
  
- Find a way to handle pagination on route GET /books and POST /books/search

- Add some validation to ensure that data are valid when creating a Book**
