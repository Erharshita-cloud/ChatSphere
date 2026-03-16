# 🚀 ChatSphere — Kubernetes Deployment

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&lines=Deploying+Frontend...+✅;Deploying+Backend...+✅;MongoDB+with+Persistent+Storage...+✅;ChatApp+is+LIVE+on+Kubernetes!+🚀" alt="Typing animation" />

![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployment-blue?style=flat-square&logo=kubernetes)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square&logo=mongodb)
![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&logo=nodedotjs)

> A fullstack chat app deployed on Kubernetes with persistent MongoDB, Ingress routing, and Secrets management.

</div>

---

## 🏗️ Architecture
```
Internet ──▶ Ingress Controller ──▶ Frontend (React)
                                         │
                                    Backend (Node.js)
                                         │
                                 MongoDB + PV/PVC
```

---

## ✨ Features
- ⚛️ React frontend + Node.js backend on Kubernetes
- 🍃 MongoDB with PersistentVolume — data survives pod restarts
- 🔐 Kubernetes Secrets for credential management
- 🌐 NGINX Ingress for custom domain routing

---

## 🚀 Deploy
```bash
kubectl apply -f k8s/namespace.yml
kubectl apply -f k8s/secrets.yml
kubectl apply -f k8s/mongodb-pv.yml -f k8s/mongodb-pvc.yml
kubectl apply -f k8s/mongodb-deployment.yml -f k8s/mongodb-service.yml
kubectl apply -f k8s/backend-deployment.yml -f k8s/backend-service.yml
kubectl apply -f k8s/frontend-deployment.yml -f k8s/frontend-service.yml
kubectl apply -f k8s/chatapp-ingress.yml
```

Access via Ingress — add `127.0.0.1 chatapp.local` to `/etc/hosts`, then open `http://chatapp.local`

---

## 🔮 Roadmap
- [ ] GitHub Actions CI/CD pipeline
- [ ] Helm charts for one-command deploy
- [ ] Prometheus + Grafana monitoring
- [ ] Horizontal Pod Autoscaling

---

<div align="center">

**Harshita Goel** · [GitHub](https://github.com/Erharshita-cloud) · harshitagoel1503@gmail.com

⭐ Star this repo if it helped you!

</div>
