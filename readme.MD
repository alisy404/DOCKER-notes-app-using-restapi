Notes REST API

The Notes REST API project is a containerized application that provides RESTful services for managing notes and notebooks. Built using Node.js, Express, and MongoDB, it utilizes Docker and Docker Compose for efficient deployment and scalability.

Project Overview

Tools and Technologies
•  Node.js and Express: Backend development.
•  MongoDB: Database for storing notes.
•  Docker: Containerization for development and production environments.
•  Docker Compose: Manage multi-container Docker applications.


Detailed Description
This project demonstrates a microservices architecture with two Node.js applications (notes-backend and notebooks-backend) working together for a comprehensive note-taking system. It uses Docker's multi-stage builds for optimized development and production containers, with each service connecting to dedicated MongoDB databases for data isolation. An nginx reverse proxy routes requests to appropriate backend services based on URL patterns, while environment variables manage database credentials securely. The entire stack deploys with a single Docker Compose command, featuring hot-reload functionality for rapid development and cross-service communication for associating notes with notebooks.

Execution Steps
1. Clone the Repository
•  git clone <repository-url>
•  cd notes_rest_api
2. Setup Environment Variables
•  Create .env files for notes-backend and notebooks-backend with MongoDB credentials.
3. Run Docker Compose
•  docker-compose -f compose.yaml up --build
4. Access the API
•  The API is available at http://localhost:8081/api/

API Endpoints
•  Notes
•  POST /api/notes: Create a new note.
•  GET /api/notes: Retrieve all notes.
•  GET /api/notes/:id: Retrieve a specific note by ID.
•  PUT /api/notes/:id: Update a note by ID.
•  DELETE /api/notes/:id: Delete a note by ID.

Configuration
•  Nginx Proxy: Routes requests to the correct service based on URL paths.
•  Database Initialization: Uses MongoDB scripts to set up databases and users.

Conclusion
This project exemplifies the use of modern development practices with Docker, making it an ideal solution for building scalable and manageable RESTful services.
