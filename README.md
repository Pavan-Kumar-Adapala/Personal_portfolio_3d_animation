# Personal Portfolio 3D Animation

This is my personal portfolio application and built with:
* **React** (frontend framework)
* **TypeScript** (type-safe JavaScript)
* **Framer Motion** (animations)
* **Vite** (build tool)

---

## 🚀 CI/CD Pipeline development, Infrastrure Provisioning and Configuration management

Implemented CI/CD pipelines using **GitHub Actions** workflows to ensure high-quality code, application containerization, and automated deployment.
![CI/CD pipeline](./readme_imgs/github_pipeline.png)

### Stage 01: Liniting 
### Stage 02: Static code analysis using SonarQube#
  #### SonarQube server
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

### Stage 03: Parallel stages 
  - Upload application build artificats to Nexus hosted raw repository
  - Build the docker image and push the image to Nexus hosted repository

  * Inside server installed docker and docker compose
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

  #### Nexus server and ALB for Reverse proxy
  ![Nexus server secuirty group](./readme_imgs/nexus_sg.png)
  ![ALB secuirty group](./readme_imgs/alb_sg.png)
  ![Raw hosted repository](./readme_imgs/raw_repo.png)
  ![Docker hosted repository](./readme_imgs/docker_repo.png)


### Stage 04: Depoly the application on GitHub Pages using custom domain
  * Uses the `gh-pages` branch as the source (configured under Pages → Source → Deploy from a branch).
  
  #### Custom domain in github pages
  - https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

  ![GitHub Pages](./readme_imgs/github_pages.png)

---

## Additional Tasks

### **Code Review & Branching Strategy:**

![Branching Strategy](https://raw.githubusercontent.com/Pavan-Kumar-Adapala/Portfolio_project_Adapala/main/assets/img/branching_strategy.jpg)

In addition to building and deploying the application, I also implemented and followed **best practices for collaboration and code quality**:

* 📝 Performed **code reviews** on Pull Requests (PRs) to ensure code quality, maintainability, and adherence to standards.
* 🔀 Designed and followed a clear **branching strategy**:

  * **main (default):** Production-ready code.
  * **development:** Integration branch for testing new features.
  * Short-lived **feature branches** for implementing specific functionalities.
  * **hotfix branches** for urgent fixes, merged back into both `main` and `development` branches.
  * **release branch:** Stabilized and tested code before merging to `main`.
  
  Note:
  * Feature branches — created for new work or bug fixes, merged into `development` after PR review & CI success.
  * 🔒 Enabled **branch protection rules**:
  * Required passing CI checks before merging.
  * Enforced PR reviews from peers or myself before merge.

These practices help ensure that the codebase stays clean, secure, and collaborative — aligning with real-world engineering workflows.

### **Resolved Code Conflicts**

### **Application containerization using multi-stage Dockerfile**
  - I have already written a **multi-stage Dockerfile** to containerize the application.

---

## 🐳 Future Work: GitOps

Planned enhancements include:

* Setting up a Kubernetes cluster on AWS (using **kubeadm**).
* Installing **ArgoCD** to implement GitOps:

  * Automatically update Kubernetes manifests with the new image tags.
  * Sync changes so that ArgoCD updates pods with the new image in the cluster.

---

## 📄 Summary

