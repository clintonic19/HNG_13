### Cat Fact API (GET /me Endpoint)

This is a simple **Node.js + Express** API that returns your user information along with a random cat fact from the public **Cat Facts API**.

## Features
- Dynamic integration with [Cat Facts API](https://catfact.ninja/fact)
- Returns structured JSON response
- Includes timestamp in ISO 8601 UTC format
- Easy to set up and run locally

## Response Format
Example successful response from `/me`:

```json
{
  "status": "success",
  "user": {
    "email": "email@example.com",
    "name": "name@example.com",
    "stack": "Stack (e.g nodejs, php, MERN, PERN, etc)"
  },
  "timestamp": "2025-10-15T14:20:00.000Z",
  "fact": "Cats sleep 70% of their lives."
}
```
## Install Dependencies
- npm install

## Run the Server
-  npm start
-  npm run dev

## Server will start at:
http://localhost:8000/me
