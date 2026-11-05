# Node.js Demo App — GitHub Actions CI/CD

## Objective
Run tests automatically, build a Docker image, and push that image to Docker Hub whenever code is pushed to the `main` branch.

## Tools
- GitHub and GitHub Actions
- Node.js 20
- Docker
- Docker Hub

## Project workflow
1. Push code to GitHub's `main` branch.
2. GitHub Actions checks out the code and installs Node.js.
3. The test job runs `npm test`.
4. Only if tests pass, the next job builds a Docker image.
5. GitHub Actions logs in to Docker Hub using GitHub Secrets and pushes the image.

## Run locally
Install Node.js 20 or newer, then run:

```bash
npm install
npm test
npm start
```

Open `http://localhost:3000` and `http://localhost:3000/health`.


## Important
This task's supplied brief asks for build and deployment automation and specifically mentions Docker Hub image deployment. This workflow publishes the Docker image to Docker Hub. It does not deploy the running container to a cloud server; add a hosting target if your instructor separately requires live website hosting.

