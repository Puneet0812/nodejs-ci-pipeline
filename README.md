# Node.js CI Pipeline

This repository demonstrates a CI pipeline using GitHub Actions, Docker, and Jest to automate the build, test, and upload process of a Node.js application.

## Repository Structure
```
nodejs-ci-pipeline
├── .github
│   └── workflows
│       └── ci.yml
├── node_modules
├── tests
│   └── app.test.js
├── app.js
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md
```
- `.github/workflows/ci.yml` - Defines the GitHub Actions workflow.
- `tests/app.test.js` - Contains unit tests using Jest.
- `app.js` - The main application file.
- `Dockerfile` - Docker configuration to containerize the application.
- `package.json` - Node.js dependencies and scripts.

## Instructions to Build and Run the Application

### 1. Clone the Repository
```bash
git clone https://github.com/Puneet0812/nodejs-ci-pipeline.git
cd nodejs-ci-pipeline
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
node app.js
```

### 4. Run Unit Tests
```bash
npm test
```

## Steps to Test the CI Pipeline
1. **Build:** Automatically triggered when code is pushed to the `main` branch.
2. **Test:** Runs Jest unit tests within the GitHub Actions workflow.
3. **Upload:** Builds a Docker image and uploads it to Docker Hub.

## Instructions to Pull the Docker Image from the Registry
To pull the Docker image from Docker Hub, run the following command:
```bash
docker pull puneet22/nodejs-ci-app
```

To run the Docker container:
```bash
docker run -d -p 3000:3000 puneet22/nodejs-ci-app
```

## Conclusion
This repository demonstrates an automated CI pipeline that ensures code quality and reliability through unit testing and Docker containerization.

