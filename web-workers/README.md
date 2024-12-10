# Regular Polling

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yalathiya/Server-Client-Communication-Strategies.git
cd Server-Client-Communication-Strategies
cd web-worker
```

### 2 Run with Docker

```bash
docker-compose build
docker-compose up
```

Access the implementation at `https://localhost:3000/`.

### 3 By Installing Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

Run the project

```bash
node index.js
```

Once the index.js is running, you can access the implementation at `https://localhost:3000/`.

## Testing

Here, Sorting of array is off-loaded from main thread, 
try different scenarios / modification of code to understand the behavior.

## Web - Worker in Project Structure

## Project Structure
```bash
web-worker/
├── public/
│   └── worker.js   # web worker
```
