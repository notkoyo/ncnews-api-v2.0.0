# NC News API v2.0.0

The hosted version of the API can be accessed at [ncnews.xg62qbtz2n.workers.dev/api/v2](https://ncnews.xg62qbtz2n.workers.dev/api/v2)

## Project Summary

A REST API to programatically access data, to use within the frontend project. Built using HonoJS & TypeScript, it uses a PostgreSQL database via Neon and interacts with the database using DrizzleORM.

## Endpoints

- GET /health - To check if the API is active.
- GET /users - Return all current users.
- GET /topics - Return all topics.
- GET /articles - Return all articles.
- GET /articles/{article_id} - Return an article by article ID param.
- GET /articles/{article_id}/comments - Return all comments for article by article ID param.
- POST /articles/{article_id}/comments - Create a new comment for the article by article ID param.
- PATCH /articles/{article_id} - Update an article by article ID param.
- DELETE /comments/{comment_id} - Delete a comment by comment ID param.
