🚀 Kubernetes Deployment for ChatApp

This folder contains the Kubernetes manifests required to deploy the complete Chat Application (Frontend + Backend + MongoDB) on a Kubernetes cluster.

📂 Folder Structure
k8s/
├── backend-deployment.yml     # Backend Deployment
├── backend-service.yml        # Backend Service
├── chatapp-ingress.yml        # Ingress Controller
├── frontend-deployment.yml    # Frontend Deployment
├── frontend-service.yml       # Frontend Service
├── mongodb-deployment.yml     # MongoDB Deployment
├── mongodb-pv.yml             # Persistent Volume
├── mongodb-pvc.yml            # Persistent Volume Claim
├── mongodb-service.yml        # MongoDB Service
├── namespace.yml              # Namespace Definition
├── secrets.yml                # Secrets (e.g., DB credentials)


----
⚡ Prerequisites

Before deploying, ensure you have:

🐳 Docker (for building images)
☸️ Kubernetes Cluster (Minikube / Kind / GKE / EKS / AKS)
📦 kubectl CLI installed and configured
🌐 (Optional) Ingress Controller (like NGINX) installed in your cluster
----

----
🚀 Deployment Steps

1️⃣ Create Namespace
kubectl apply -f namespace.yml

2️⃣ Apply Secrets (DB credentials, API keys, etc.)
kubectl apply -f secrets.yml

3️⃣ Deploy MongoDB (with storage)
kubectl apply -f mongodb-pv.yml
kubectl apply -f mongodb-pvc.yml
kubectl apply -f mongodb-deployment.yml
kubectl apply -f mongodb-service.yml

4️⃣ Deploy Backend
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml

5️⃣ Deploy Frontend
kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service.yml

6️⃣ Setup Ingress (for external access)
kubectl apply -f chatapp-ingress.yml

🌍 Accessing the Application

   If using NodePort/LoadBalancer, get the service IP:
   kubectl get svc -n chat-app

Copy the external IP/Port and open in your browser.

If using Ingress:
Add your domain to /etc/hosts and access via:
http://chatapp.local
----

----
🎯 Features

✅ Fullstack ChatApp (Frontend + Backend + MongoDB)

✅ Kubernetes Deployments, Services, Secrets, PV, PVC, Ingress

✅ Persistent storage for MongoDB

✅ Custom domain support with Ingress

✅ Scalable & cloud-ready architecture

🖼️ Project Architecture
[ Client ] ⇄ [ Ingress Controller ] ⇄ [ Frontend Service ] ⇄ [ Backend Service ] ⇄ [ MongoDB Service (with PV/PVC) ]
----

----
📖 Learnings

1: How to deploy multi-tier applications on Kubernetes

2: Using Secrets for sensitive data

3: Setting up Persistent Volumes & PVCs for databases

4: Configuring Ingress for custom domain access

5: Scaling and managing microservices in Kubernetes
----

----
### Kubernetes Resources
- Pods running in the `chat-app` namespace: 
  ![alt text](<screenshots/Screenshot 2025-08-31 190406.png>)


- Services exposed:
  ![alt text](<screenshots/Screenshot 2025-08-31 190423.png>)


- Ingress configured for external access:
  ![alt text](<screenshots/Screenshot 2025-08-31 191906.png>)
----

----
### Application Access
- ChatApp running in the browser through Kubernetes Ingress:
![alt text](<screenshots/Screenshot 2025-08-31 184954.png>)


![alt text](<screenshots/Screenshot 2025-08-31 173133.png>)


![alt text](<screenshots/Screenshot 2025-08-31 173328.png>)
----

👩‍💻 Author: [Harshita Goel]