# Coffee Shop Website - PreProdSync Deployment
Welcome to the Coffee Shop Website project! This project is part of the PreProdSync initiative, designed to deploy and monitor applications in a Kubernetes-based pre-production environment before deploying to production.

## Project Objective

The goal of this project is to **implement a Pre-Production Synchronization (PreProdSync) workflow** for deploying and monitoring a web application before pushing it to the main production environment.  

This setup ensures that any new features or changes are tested and validated within a Kubernetes-based staging environment using **ArgoCD, Prometheus, and Grafana** before being deployed to the live production servers.  

---

## Project Structure

```sh

PreProdSync/
├── coffee-shop-website/
│   ├── src/
│   │   ├── index.html        # Main HTML document
│   │   ├── login.html        # Login page
│   │   ├── css/
│   │   │   └── styles.css    # CSS styles
│   │   ├── js/
│   │   │   └── scripts.js    # JavaScript for interactivity
│   │   └── images/           # Image assets
│   ├── Dockerfile            # Docker configuration
│   ├── docker-compose.yml    # Docker Compose setup
│   ├── manifests/
│   │   ├── deployment.yaml   # Kubernetes deployment manifest
│   │   ├── service.yaml      # Kubernetes service manifest
│   ├── prometheus.yml        # Prometheus configuration
│   ├── package.json          # Project dependencies
│   ├── README.md             # Documentation

```
## PreProdSync Workflow

The **PreProdSync workflow** ensures a seamless development-to-production pipeline using **GitHub Actions, Docker, Kubernetes, ArgoCD, Prometheus, and Grafana**.


## Detailed Workflow Explanation

## 1. Code Push & GitHub Actions (CI/CD)

Developers push changes to GitHub.

A GitHub Actions workflow (main.yml) triggers the build process.

## 2. Docker Image Creation & Deployment

GitHub Actions builds a Docker image of the Coffee Shop website.

The image is pushed to Docker Hub for easy deployment.

## 3. ArgoCD Synchronization & Kubernetes Deployment

ArgoCD detects new changes in the repository and updates the PreProdSync Kubernetes Cluster.

The updated container is deployed as a Kubernetes Pod.

## 4. Application Monitoring with Prometheus & Grafana

Prometheus collects real-time metrics from the application.

Grafana provides a dashboard to visualize application health & performance.

## 5. Final Validation & Production Deployment

The staging environment is monitored for errors, slow performance, or crashes.

Once validated, the new version is pushed to production, ensuring zero-downtime deployments.



## Setup Instructions

## 1. Clone the repository
```bash

git clone https://github.com/Kumar22Ankit/PreProdSync-test
cd PreProdSync/coffee-shop-website
```
## 2. Build and run the Docker container
```sh
docker build -t coffee-shop-app .
docker run -d -p 3000:80 coffee-shop-app
```
## 3. Deploy on Kubernetes

Apply the Kubernetes manifests:
```sh
kubectl apply -f manifests/
```
## Verify the deployment:
```sh
kubectl get pods -n coffee-shop
kubectl get svc -n coffee-shop
```
## 4. Set Up Monitoring with Prometheus & Grafana

docker network create monitoring
```sh
docker run -d --name=prometheus --network=monitoring \
    -p 9090:9090 \
    -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus

docker run -d --name=grafana --network=monitoring \
    -p 3000:3000 \
    grafana/grafana

Deploy Prometheus and Grafana using Docker
```
## Verify Setup

Prometheus UI: http://localhost:9090

Grafana UI: http://localhost:3000 (default credentials: admin/admin)

Configure Prometheus as a data source in Grafana

## Monitoring Configuration

## Prometheus Scrape Targets
```sh
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]

  - job_name: "coffee-shop"
    static_configs:
      - targets: ["coffee-shop-service:31000"]  # Update with service & port
```
## Grafana Dashboard Setup

Add Prometheus as a data source

Import custom dashboards for visualizing metrics

## Contributing
We welcome contributions!
Feel free to submit pull requests or open issues for feature suggestions.

This version keeps everything **detailed, structured, and clear**, following best practices for documentation. Let me know if you need any refinements! 🚀
