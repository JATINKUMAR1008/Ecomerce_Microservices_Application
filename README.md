# E-commerce Microservice Application

This repository contains the code for a scalable e-commerce microservice application. The frontend is built using React.js, while the backend services are developed with Flask. The entire application is containerized and deployed on DigitalOcean.

## Project Structure

The repository is organized as follows:

- **Auth/**: Contains the authentication microservice, responsible for handling user login, registration, and authorization logic.

- **Cart/**: Contains the shopping cart microservice, managing user cart operations such as adding and removing products, and calculating totals.

- **Database/**: Manages the database layer, including models and migrations. Initially built with SQLite, it has been migrated to PostgreSQL for production use.

- **Images/**: Stores static images used by the frontend or other services, such as product images or logos.

- **Products_Catalog/**: Contains the product catalog microservice, managing product listings, categories, and related operations.

- **conf/**: Configuration files for the application, including settings for the deployment environment, such as ingress configurations.

- **frontend/**: Contains the React.js code for the frontend, providing a user interface for interacting with the e-commerce platform.

- **kubefiles/**: Kubernetes manifests and configuration files necessary for deploying the application on DigitalOcean Kubernetes.

- **postgres-data/**: Directory for PostgreSQL data, used by the database service to persist data.

- **README.md**: The file you are currently reading, providing an overview and documentation for the project.

- **docker-compose.yml**: Docker Compose file for orchestrating the development environment, defining services, networks, and volumes for all microservices.

- **requirements.txt**: Lists the Python dependencies required for the Flask services.

## Deployment Overview

The application is designed to be fully containerized and runs on a DigitalOcean Kubernetes cluster. Each microservice is packaged into a Docker container and managed by Kubernetes for scalability and reliability.

### Key Components

- **Frontend**: A React.js application that interacts with various backend microservices to provide a seamless shopping experience for users.
  
- **Backend Microservices**: Flask-based services handling distinct responsibilities such as authentication, product catalog management, and cart operations.

- **Database**: PostgreSQL is used for data persistence, with a dedicated microservice managing database interactions.

- **Kubernetes Deployment**: The application is deployed on DigitalOcean using Kubernetes. The `kubefiles/` directory contains all necessary Kubernetes manifests, including deployment, service, and ingress configurations.

## Running Locally

To run the application locally using Docker Compose:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ecom-microservice.git
   cd ecom-microservice
2. Build and start the services:
   ```bash
    docker-compose up --build
3. Access the application via http://localhost:3000 for the frontend.

## Deployment on DigitalOcean
### To deploy the application on DigitalOcean:

1. Ensure you have a DigitalOcean Kubernetes cluster set up.

2. Apply the Kubernetes manifests in the kubefiles/ directory:
   ```bash
   kubectl apply -f kubefiles/
3. Use the DigitalOcean Kubernetes dashboard to monitor and manage the deployment.

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request for any changes or enhancements.
