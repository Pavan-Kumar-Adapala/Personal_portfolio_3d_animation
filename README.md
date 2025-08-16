# **Web Application Depolyment Project**
This repository demonstrates two deployment approaches for my personal portfolio project:
1. Serverless Depolyment
2. GitOps-driven Depolyment

## **Serverless Depolyment - GitHub Pages**

This deployment serves the portfolio as a static website hosted on GitHub Pages, using CI/CD pipelines for automation.

Tech Stack:
* React, TypeScript, Framer Motion, Vite
* GitHub Actions (CI/CD)
* SonarQube (code quality)
* Nexus Repository (artifact storage)
* GitHub Pages (hosting with custom domain)

![Architecture diagram](./readme_imgs/CI_CD.png)

---

### **DevOps & Cloud Implementation**

![CI/CD pipeline](./readme_imgs/github_pipeline.png)

Push Code: Developer pushes to main or development branch.

CI/CD Pipeline:

* Linting and static code analysis via **SonarQube**

* **Build optimized artifacts** with Vite

* **Artifact Management**: Upload artifacts to **Nexus** raw repository

* **Deployment**: Automatically deploy to **GitHub Pages** with a custom domain

---

#### **Static Code Analysis – SonarQube**

* **Self-hosted SonarQube** server provisioned on Ubuntu.
* Installed **Docker & Docker Compose** for containerized SonarQube and PostgreSQL.
* Configured **GitHub Actions** to upload reports to the SonarQube server for:

  * Code quality checks
  * Maintainability ratings
  * Security vulnerability scanning

  Note:
  - Inside server installed docker and docker compose
    
    ```bash
    #!/bin/bash
    echo "Updating package lists..."
    sudo apt-get update

    echo "Installing prerequisites..."
    sudo apt-get install ca-certificates curl

    echo "Adding Docker GPG key..."
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    echo "Adding Docker repository..."
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    echo "Updating package lists again..."
    sudo apt-get update

    echo "Installing Docker Engine & tools..."
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    echo "Adding user '$USER' to docker group..."
    sudo usermod -aG docker "$USER"
    echo "Docker installed. Please log out & back in or run 'newgrp docker' to apply group change."
    ```
    
  - docker compose file to access SonarQube server

    ```yaml
    services:
      sonarqube:
        depends_on:
          sonar_db:
            condition: service_healthy
        image: mc1arke/sonarqube-with-community-branch-plugin:25.6.0.109173-community
        environment:
          - SONAR_JDBC_URL=jdbc:postgresql://sonar_db:5432/sonar
          - SONAR_JDBC_USERNAME=sonar
          - SONAR_JDBC_PASSWORD=sonar
        container_name: sonarqube
        ports:
          - "9000:9000"
        networks:
          - sonarnet
        volumes:
          - sonarqube_conf:/opt/sonarqube/conf
          - sonarqube_data:/opt/sonarqube/data
          - sonarqube_extensions:/opt/sonarqube/extensions
          - sonarqube_logs:/opt/sonarqube/logs
          - sonarqube_temp:/opt/sonarqube/temp

      sonar_db:
        image: postgres:16
        healthcheck:
          test: [ "CMD-SHELL", "pg_isready -U sonar" ]
          interval: 10s
          timeout: 5s
          retries: 5
        environment:
          - POSTGRES_USER=sonar
          - POSTGRES_PASSWORD=sonar
        hostname: sonar_db
        container_name: postgres
        networks:
          - sonarnet
        volumes:
          - postgresql:/var/lib/postgresql
          - postgresql_data:/var/lib/postgresql/data

    volumes:
      sonarqube_conf:
      sonarqube_data:
      sonarqube_extensions:
      sonarqube_logs:
      sonarqube_temp:
      postgresql:
      postgresql_data:
      
    networks:
      sonarnet:
    ```
  ![SonarQube server secuirty group](./readme_imgs/sonarqube_sg.png)
  ![Setup Project inside SonarQube server](./readme_imgs/sonar_project_setup1.png)
  ![Token creation inside SonarQube server](./readme_imgs/token.png)
  ![Adding action secrets inside GitHub](./readme_imgs/github_secrets.png)

---

#### **Artifact Management – Nexus Repository**

* Deployed **Sonatype Nexus** via Docker Compose.
* Configured:

  * **Raw repository** for application build artifacts
  * **Docker hosted repository** for container images
* Integrated with CI/CD to:

  * Upload build artifacts automatically
  * Push container images to Nexus Docker registry
  * Configured **AWS Application Load Balancer (ALB)** as a reverse proxy with security groups.

  Note:

  * docker compose file to access Nexus server

  ```yaml
  services:
  nexus:
    image: sonatype/nexus3
    restart: always
    volumes:
      - "nexus-data:/sonatype-work"
    ports:
      - "8081:8081" # For Nexus UI
      - "5000:5000" # For HTTP
  volumes:
    nexus-data: {}
  ```

  ##### Nexus server and ALB for Reverse proxy
  ![Nexus server secuirty group](./readme_imgs/nexus_sg.png)
  ![ALB secuirty group](./readme_imgs/alb_sg.png)
  ![Raw hosted repository](./readme_imgs/raw_repo.png)
  ![Docker hosted repository](./readme_imgs/docker_repo.png)

---

#### **Deployment – GitHub Pages**

* Automated deployment from `gh-pages` branch.
* Configured **custom domain** and DNS settings for professional hosting.
  ##### Custom domain in github pages
  - https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

  ![GitHub Pages](./readme_imgs/github_pages.png)

---

### **Infrastructure & Configuration Management**

* Provisioned servers manually using **shell scripting** and **Docker Compose**.
* Configured **security groups** for controlled access to SonarQube, Nexus, and ALB.

---

### **Branching Strategy & Collaboration**

* Implemented **Git workflow best practices**:

  ![Branching Strategy](https://raw.githubusercontent.com/Pavan-Kumar-Adapala/Portfolio_project_Adapala/main/assets/img/branching_strategy.jpg)

  * `main` – production-ready code
  * `development` – integration branch
  * Short-lived **feature branches**
  * **Hotfix branches** for urgent fixes
  * **Release branches** for staging before production
  * Enforced **branch protection rules**:

  * Mandatory **CI checks** before merge
  * **Code review approval** before integration
  * Resolved Code Conflicts

---

### **Key DevOps Tools & Technologies**

**CI/CD:** GitHub Actions
**Code Quality:** SonarQube
**Artifact Management:** Nexus Repository
**Containerization:** Docker, Docker Compose
**Hosting & Networking:** AWS ALB, GitHub Pages
**Version Control:** Git, GitHub Branch Protection Rules

---
## GitOps-driven Depolyment with ArgoCD


### **Kubernetes Cluster Setup**
* Wrote **multi-stage Dockerfile** for optimized application containerization.
* Provisioned manually using **kubeadm** on AWS EC2
* Installed:

  * **kubectl**, **kubeadm**, **kubelet**
  * **CNI Plugin (Calico)**
  * **ArgoCD** for GitOps-based deployments

  ```bash
  #!/bin/bash
  # This script sets up Kubernetes using kubeadm on a Linux system.
  echo "Update the system packages..."
  sudo apt-get update -y && sudo apt-get upgrade -y
  echo "Installing required packages..."
  sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common gpg
  echo "Disabling swap..."
  sudo swapoff -a
  echo "making swap off persistent... disabled in config file /etc/fstab"
  sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
  # sudo sed -i '/ swap / s/^/#/' /etc/fstab
  echo "Install and configure container runtime..."
  sudo apt-get install -y containerd
  sudo mkdir -p /etc/containerd
  sudo containerd config default | sudo tee /etc/containerd/config.toml > /dev/null
  echo "Enable Systemd cgroup driver..."
  sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
  echo "Restarting containerd service..."
  sudo systemctl restart containerd
  sudo systemctl enable containerd
  echo "Installing kubeadm, kubelet and kubectl..."
  echo "Adding Kubernetes APT repository..."
  sudo apt-get update
  curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.33/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
  echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.33/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
  sudo apt-get update
  sudo apt-get install -y kubelet kubeadm kubectl
  echo "Marking kubelet, kubeadm and kubectl to hold..."
  sudo apt-mark hold kubelet kubeadm kubectl
  echo "You can now initialize your Kubernetes cluster using 'kubeadm init'."
  echo "Load Required Kernel Modules..."
  cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
  overlay
  br_netfilter
  EOF
  sudo modprobe overlay
  sudo modprobe br_netfilter
  echo "Configure Network Settings for Kubernetes..."
  cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
  net.bridge.bridge-nf-call-ip6tables = 1
  net.bridge.bridge-nf-call-iptables = 1
  net.ipv4.ip_forward = 1
  EOF
  sudo sysctl --system
  echo "Kubernetes setup completed successfully!"
  # echo "sudo kubeadm init --pod-network-cidr=192.168.0.0/16(you can replace) --apiserver-advertise-address=$PRIVATE_IP"
  # echo "To join worker nodes to the cluster, run the following command on each worker node:"
  # echo "sudo kubeadm join <control-plane-private-ip>:6443 --token <token> --discovery-token-ca-cert-hash sha256:<hash>"
  ```
  #### Initialize Kubernetes Control Plane
  sudo kubeadm init --pod-network-cidr=192.168.0.0/16(you can replace) --apiserver-advertise-address=$PRIVATE_IP

  Note: Please make sure cidr not conflict with your VPC cidr range

  To start using your cluster, you need to run the following as a regular user:
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config

  Install Calico CNI using manifest:
    kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.1/manifests/calico.yaml

  #### Then you can join any number of worker nodes by running the following on each as root
  sudo kubeadm join <control-plane-private-ip>:6443 --token <token> --discovery-token-ca-cert-hash sha256:<hash>
  

![Cluster info](./readme_imgs/argocd/k8s_cluster.png)

![Master Node Secuirty Group List](./readme_imgs/argocd/master_sg.png)

![Worker Node Secuirty Group List](./readme_imgs/argocd/worker_sg.png)

---

### **ArgoCD GitOps Workflow**

1. Push application manifests to GitHub repo
2. ArgoCD continuously syncs to Kubernetes cluster
3. Any new commit → automatic deployment/update

![CI Pipeline](./readme_imgs/argocd/ci_pipeline.png)
![ArgoCD sync](./readme_imgs/argocd/argocd.png)

*Architecture Diagram:*
![GitOps Architecture](./readme_imgs/argocd/gitops.svg)

---

### **Networking & Access**

* Configured **Kubernetes Services** (NodePort)
  ![ClusterIP type](./readme_imgs/argocd/clusterip_type.png)
  ![NodePort type](./readme_imgs/argocd/nodeport_type.png)

* Integrated with **AWS ALB** manually for HTTPS + host-based routing
  ![Host condition](./readme_imgs/argocd/alb_listner.png)
  ![ALB Resource Map](./readme_imgs/argocd/ALB_Resourcemap.png)

* Secured with Security Groups & SSL termination at ALB
  ![ALB secuirty group](./readme_imgs/argocd/alb_sg.png)
  ![Raw hosted repository](./readme_imgs/raw_repo.png)
  ![Docker hosted repository](./readme_imgs/docker_repo.png)


---

### **Deployment Manifest**

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: portfolio-3d
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-3d
  namespace: portfolio-3d
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio-3d
  template:
    metadata:
      labels:
        app: portfolio-3d
    spec:
      containers:
        - name: portfolio-3d-container
          image: adapaladocker/personal_portfolio_3d:Prod-1066e01be3ac334d1162843ced58f1e39e1755fb
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "1Gi"
              cpu: "1"
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-3d-service
  namespace: portfolio-3d
spec:
  selector:
    app: portfolio-3d
  ports:
    - protocol: TCP
      port: 8080 
      targetPort: 80
      nodePort: 30332
  type: NodePort
```

---

# **📚 Key Tools & Technologies**

* **CI/CD:** GitHub Actions
* **Security Tools:** SonarQube, Trivy
* **Artifact Management:** Nexus Repository
* **Hosting:** AWS EC2 + Kubernetes
* **Containerization:** Kubernetes, Docker
* **Networking:** NACLs, Securitg groups, ALB, DNS, HTTP, HTTPS
* **GitOps:** ArgoCD

![Application](./readme_imgs/argocd/application.png)
---

# **🔮 Future Enhancements**

* Automate infra provisioning with **Terraform**
* Replace manual ALB setup with **AWS Load Balancer Controller**
* Implement **Helm charts** for reusable manifests
* Enable **Argo Rollouts** for progressive delivery

---

