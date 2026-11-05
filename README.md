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

## GitHub setup
1. Create a public GitHub repository named `nodejs-demo-app`.
2. Upload all files and folders from this project to the repository root.
3. In Docker Hub, create an access token.
4. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**.
5. Add:
   - `DOCKERHUB_USERNAME` — your Docker Hub username.
   - `DOCKERHUB_TOKEN` — the Docker Hub access token (not your password).
6. Push the files to the `main` branch.
7. Open the repository's **Actions** tab and check that both jobs pass.
8. In Docker Hub, confirm that the `nodejs-demo-app` image repository has a `latest` tag.

## Important
This task's supplied brief asks for build and deployment automation and specifically mentions Docker Hub image deployment. This workflow publishes the Docker image to Docker Hub. It does not deploy the running container to a cloud server; add a hosting target if your instructor separately requires live website hosting.

## Interview preparation
- **CI/CD:** Continuous Integration and Continuous Delivery/Deployment; automates validating and releasing code.
- **GitHub Actions:** GitHub's automation service that runs workflows defined in YAML files.
- **Runner:** The machine (hosted by GitHub or self-hosted) that executes a workflow job.
- **Job vs step:** A job is a group of steps run on a runner; a step is one action or command inside a job.
- **Secrets:** Store credentials in GitHub Actions Secrets and reference them with `${{ secrets.SECRET_NAME }}`.
- **Deployment errors:** Inspect the failed Actions log, identify the failing step, fix the cause, and push again.
- **Docker build-push:** Build a Docker image from the Dockerfile and upload it to a registry such as Docker Hub.
- **Local testing:** Run `npm test` and optionally build with `docker build -t nodejs-demo-app .`.
