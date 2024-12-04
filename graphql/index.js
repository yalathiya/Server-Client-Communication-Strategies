const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const morgan = require('morgan'); // Logging middleware

// Define GraphQL schema
const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    post(id: Int!): Post
    comments(postId: Int!): [Comment]
    users: [User]
  }

  type Mutation {
    addUser(name: String!): User
    addPost(userId: Int!, title: String!): Post
    addComment(postId: Int!, userId: Int!, text: String!): Comment
  }

  type User {
    id: Int
    name: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    comments: [Comment]
  }

  type Comment {
    id: Int
    text: String
    user: User
  }
`);

// Sample data
let users = [
  { id: 1, name: "Sachin Tendulkar" },
  { id: 2, name: "Mahendra Singh Dhoni" }
];

let posts = [
  { id: 1, userId: 1, title: "GraphQL in Action" },
  { id: 2, userId: 2, title: "Understanding REST" }
];

let comments = [
  { id: 1, text: "Great article!", postId: 1, userId: 2 },
  { id: 2, text: "Very helpful, thanks!", postId: 1, userId: 1 }
];

// Root resolvers
const root = {
  user: ({ id }) => users.find(user => user.id === id),
  post: ({ id }) => posts.find(post => post.id === id),
  comments: ({ postId }) => comments.filter(comment => comment.postId === postId),
  users: () => users,
  
  addUser: ({ name }) => {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    return newUser;
  },
  
  addPost: ({ userId, title }) => {
    const newPost = { id: posts.length + 1, userId, title };
    posts.push(newPost);
    return newPost;
  },
  
  addComment: ({ postId, userId, text }) => {
    const newComment = { id: comments.length + 1, text, postId, userId };
    comments.push(newComment);
    return newComment;
  },
  
  // Resolve nested data for posts and comments
  User: {
    posts: (user) => posts.filter(post => post.userId === user.id)
  },
  
  Post: {
    comments: (post) => comments.filter(comment => comment.postId === post.id)
  },
  
  Comment: {
    user: (comment) => users.find(user => user.id === comment.userId)
  }
};

// Set up Express server
const app = express();
app.use(morgan('combined')); // Log all HTTP requests

// routing
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('GraphQL server running on http://localhost:4000/graphql');
});
