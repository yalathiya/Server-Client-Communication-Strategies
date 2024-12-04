# API CRUD Operations Demo

This repository demonstrates the implementation of a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on a "User" resource. The API is built using **Node.js** with **Express**.

This project serves as an example of how backend systems can integrate with frontend systems using API communication, which will be discussed in the article _"The Right Approach to Connect Server & Frontend | API, WebSocket, SSE & More."_

## Table of Contents

- [Technologies Used](#technologies-used)
- [How to Run the Project](#how-to-run-the-project)
- [API Endpoints](#api-endpoints)
- [Example Requests & Responses](#example-requests--responses)
- [Testing the API](#testing-the-api)
- [Docker Support](#docker-support)
- [Conclusion](#conclusion)

## Technologies Used

- **Node.js** - Runtime environment for JavaScript
- **Express.js** - Web framework for building the API
- **Docker** - For containerization and easy deployment

## How to Run the Project

Follow these steps to run the project locally or with Docker.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yalathiya/Server-Client-Communication-Strategies.git
cd Server-Client-Communication-Strategies
cd rest-api
```

### 2.1 Using Docker Support

This project comes with **Docker** support. You can build and run the application within a Docker container to ensure consistency across environments.

### Running with Docker:

```bash
docker-compose up --build
```

### Accessing the API:

Once the container is running, you can access the API at `http://localhost:3000`.

### 3.1 By Installing Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

Run the project

```bash
node index.js
```

Once the index.js is running, you can access the API at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available in this demo:

### 1. GET All Users

- **Endpoint**: `/api/users`
- **Method**: `GET`
- **Description**: Fetch all users.
- **Response**:
  ```json
  [
      {
          "id": 1,
          "name": "Sachin Tendulkar",
          "email": "sachin.t@gmail.com",
          "age": 30
      },
  ]
  ```

### 2. GET Single User

- **Endpoint**: `/api/users/:id`
- **Method**: `GET`
- **Description**: Fetch a single user by ID.
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Sachin Tendulkar",
    "email": "sachin.t@gmail.com",
    "age": 30
  }
  ```

### 3. POST Create User

- **Endpoint**: `/api/users`
- **Method**: `POST`
- **Description**: Create a new user.
- **Request Body**:
  ```json
  {
    "name": "Sachin Tendulkar",
    "email": "sachin.t@example.com",
    "age": 25
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "name": "Sachin Tendulkar",
    "email": "sachin.t@gmail.com",
    "age": 25
  }
  ```

### 4. PUT Update User

- **Endpoint**: `/api/users/:id`
- **Method**: `PUT`
- **Description**: Update an existing user by ID.
- **Request Body**:
  ```json
  {
    "name": "Mahendra Singh Dhoni",
    "email": "msd@msd.com",
    "age": 35
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Mahendra Singh Dhoni",
    "email": "msd@msd.com",
    "age": 35
  }
  ```

### 5. DELETE User

- **Endpoint**: `/api/users/:id`
- **Method**: `DELETE`
- **Description**: Delete a user by ID.
- **Response**:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

## Example Requests & Responses

### Example Request: POST Create User

```json
{
  "name": "Virat Kohli",
  "email": "virat@example.com",
  "age": 28
}
```

### Example Response: POST Create User

```json
{
  "id": 3,
  "name": "Virat Kohli",
  "email": "virat@example.com",
  "age": 28
}
```

## Testing the API

You can test the API using **Postman** or **cURL**.

### Testing with cURL:

- **GET All Users**:

```bash
curl -X GET http://localhost:3000/api/users
```

- **POST Create User**:

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "Satyam", "email": "Satyam@example.com", "age": 26}'
```

- **GET Single User**:

```bash
curl -X GET http://localhost:3000/api/users/1
```

## Conclusion

This project demonstrates a simple implementation of a RESTful API with CRUD operations. It can be used as a foundational starting point for larger applications. Feel free to extend it with additional features like data validation, authentication, authorization or integration with a database.

---

For more information on **APIs** and their significance in web development, refer to [Postman API Guide](https://www.postman.com/what-is-an-api/).
