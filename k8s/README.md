 🚀 Kubernetes Deployment for ChatApp

![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployment-blue?logo=kubernetes)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![Frontend](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Backend](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)

A **Fullstack Chat Application** deployed on **Kubernetes**, featuring a React frontend, Node.js backend, and MongoDB database with persistent storage.

---

## 📂 Folder Structure

```bash
📂 k8s/
├── backend-deployment.yml       # Backend Deployment
├── backend-service.yml          # Backend Service
├── chatapp-ingress.yml          # Ingress Controller
├── frontend-deployment.yml      # Frontend Deployment
├── frontend-service.yml         # Frontend Service
├── mongodb-deployment.yml       # MongoDB Deployment
├── mongodb-pv.yml               # Persistent Volume
├── mongodb-pvc.yml              # Persistent Volume Claim
├── mongodb-service.yml          # MongoDB Service
├── namespace.yml                # Namespace Definition
├── secrets.yml                  # Secrets (e.g., DB credentials)

----



⚡ Prerequisites

   Before deploying, ensure you have:

    🐳 Docker (for building images)

    ☸️ Kubernetes Cluster (Minikube / Kind / GKE / EKS / AKS)

    📦 kubectl CLI installed and configured

    🌐 (Optional) Ingress Controller (e.g., NGINX)

----



🚀 Deployment Steps

✅ 1. Create Namespace
    kubectl apply -f namespace.yml

✅ 2. Apply Secrets
    kubectl apply -f secrets.yml

✅ 3. Deploy MongoDB (with storage)
    kubectl apply -f mongodb-pv.yml
    kubectl apply -f mongodb-pvc.yml
    kubectl apply -f mongodb-deployment.yml
    kubectl apply -f mongodb-service.yml

✅ 4. Deploy Backend
    kubectl apply -f backend-deployment.yml
    kubectl apply -f backend-service.yml

✅ 5. Deploy Frontend
    kubectl apply -f frontend-deployment.yml
    kubectl apply -f frontend-service.yml

✅ 6. Setup Ingress (for external access)
    kubectl apply -f chatapp-ingress.yml


🌍 Accessing the Application

If using NodePort / LoadBalancer:
   kubectl get svc -n chat-app
   Copy the external IP/Port and open in your browser.

If using Ingress:
   Add your domain to /etc/hosts:
   127.0.0.1 chatapp.local
   Then access via:
    👉 http://chatapp.local

----


🖼️ Architecture

graph TD;
    Client --> IngressController
    IngressController --> FrontendService
    FrontendService --> BackendService
    BackendService --> MongoDBService
    MongoDBService --> MongoDB[MongoDB with PV/PVC]

----


📸 Screenshots

Pods Running in chat-app Namespace

![Pods Screenshot](k8s/screenshots/Screenshot_2025_08_31_190406.png)

Services Exposed

![Services Screenshot](k8s/screenshots/Screenshot_2025_08_31_190423.png)

Application Access via Ingress

![Ingress Screenshot](k8s/screenshots/Screenshot_2025_08_31_191906.png)

ChatApp Running in Browser

![ChatApp UI](k8s/screenshots/Screenshot_2025_08_31_184954.png)

----


🎯 Features
   
   ✅ Fullstack ChatApp (Frontend + Backend + MongoDB)

   ✅ Kubernetes Deployments, Services, Secrets, PV, PVC, Ingress

   ✅ Persistent storage for MongoDB
   
   ✅ Custom domain support with Ingress

   ✅ Scalable & cloud-ready architecture

----


📖 Learnings

   🔐 Using Secrets for sensitive data

   💾 Setting up Persistent Volumes & PVCs

   🌐 Configuring Ingress for domain access

   📦 Deploying multi-tier apps on Kubernetes

   📈 Scaling & managing microservices

----


🚧 Future Enhancements
   
   Add CI/CD pipeline with GitHub Actions

   Implement Helm charts for easier deployment

   Add monitoring with Prometheus & Grafana

   Enable Horizontal Pod Autoscaling

----

👩‍💻 Author
Harshita Goel | https://github.com/Erharshita-cloud