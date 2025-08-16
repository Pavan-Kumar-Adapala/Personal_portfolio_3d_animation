# **Web Application Depolyment Project**
This repository demonstrates two deployment approaches for my personal portfolio project:
1. Serverless Depolyment
2. GitOps-driven Depolyment

## **Serverless Depolyment using GitHub Pages**

This deployment serves the portfolio as a static website hosted on GitHub Pages, using CI/CD pipelines for automation.

Tech Stack:
* React, TypeScript, Framer Motion, Vite
* GitHub Actions (CI/CD)
* SonarQube (code quality)
* Nexus Repository (artifact storage)
* GitHub Pages (hosting with custom domain)

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

### **🛠 Infrastructure & Configuration Management**

* Provisioned servers manually using **shell scripting** and **Docker Compose**.
* Configured **security groups** for controlled access to SonarQube, Nexus, and ALB.

---

### **📌 Branching Strategy & Collaboration**

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


![Architecture diagram](./readme_imgs/CI_CD.png)

---

## GitOps-driven Depolyment using ArgoCD

* Wrote **multi-stage Dockerfile** for optimized application containerization.
