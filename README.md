# 🗂️ Task Manager (DevOps Project)

A fullstack Task Manager web application built with **Node.js**, **MongoDB**, **HTML/CSS**, and served using **NGINX**. The app is fully containerized with **Docker** and deployed to **AWS EC2** with a CI pipeline via **GitHub Actions**.

---

## 🚀 Features

- Add and view tasks
- Backend API built with Node.js + Express
- MongoDB as database (Dockerized)
- Frontend served using NGINX
- CI pipeline for automated builds via GitHub Actions
- Docker image pushed to Docker Hub
- Deployed on AWS EC2

---

## 🧱 Tech Stack

| Layer        | Technology              |
|--------------|--------------------------|
| Frontend     | HTML, CSS, JS (Vanilla) |
| Backend      | Node.js, Express         |
| Database     | MongoDB                  |
| DevOps Tools | Docker, Docker Compose, GitHub Actions |
| Hosting      | AWS EC2, NGINX           |

---

## 🐳 Dockerized Setup

### 🔧 Build & Run Locally (Dev)

```bash
git clone https://github.com/Sarath2105/Task-manager-project.git
cd Task-manager-project
docker-compose up --build
