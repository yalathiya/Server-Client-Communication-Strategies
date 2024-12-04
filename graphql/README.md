# GraphQL API Example: Users, Posts, and Comments

This repository provides a GraphQL API for managing users, posts, and comments, demonstrating the capabilities and advantages of GraphQL over traditional REST APIs.

## Data Relationships

1. User-Post Relationship:

   - A User can have multiple Posts.
   - Each Post belongs to a specific User.

2. Post-Comment Relationship:

   - A Post can have multiple Comments.
   - Each Comment belongs to a specific Post.

3. Comment-User Relationship:
   - A Comment is written by a specific User.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yalathiya/Server-Client-Communication-Strategies.git
cd Server-Client-Communication-Strategies
cd graphql
```

### 2 Run with Docker

```bash
docker-compose up --build
```

Access the GraphQL API at `http://localhost:4000/graphql`.

### 3 By Installing Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

Run the project

```bash
node index.js
```

Once the index.js is running, you can access the API at `http://localhost:4000/graphql`.

## Testing

### Sample Queries

### Fetch All Users

```graphql
query {
  users {
    id
    name
    posts {
      id
      title
    }
  }
}
```

### Add a New User

```graphql
mutation {
  addUser(name: "Virat Kohli") {
    id
    name
  }
}
```

### Add a Post

```graphql
mutation {
  addPost(userId: 1, title: "Mastering Cricket") {
    id
    title
  }
}
```

### Add a Comment

```graphql
mutation {
  addComment(postId: 1, userId: 2, text: "Amazing insights!") {
    id
    text
    user {
      name
    }
  }
}
```

### Fetch User with Posts and Comments

```graphql
query {
  user(id: 1) {
    id
    name
    posts {
      id
      title
      comments {
        id
        text
        user {
          name
        }
      }
    }
  }
}
```

### Fetch All Posts with Nested Comments & User Info

```graphql
query {
  posts {
    id
    title
    comments {
      id
      text
      user {
        id
        name
      }
    }
  }
}
```

### Nested Data Retrieval

```graphql
query {
  post(id: 1) {
    title
    comments {
      text
      user {
        name
      }
    }
  }
}
```

### Fetch Comments by Post ID

```graphql
query {
  comments(postId: 2) {
    id
    text
    user {
      name
    }
  }
}
```

## Conclusion

GraphQL simplifies data fetching, reduces overfetching, and allows for more flexible queries compared to REST APIs. This project demonstrates how to implement and leverage GraphQL for a complex data model. Test it locally or deploy using Docker to explore the benefits.

To dive deeper into GraphQL, visit [Learn GraphQL](https://graphql.org/learn/).
