# Personal Portfolio 3D Animation

This is my personal portfolio application, developed to showcase my skills and experience in DevOps and cloud engineering.

The application was built with:

* **React** (frontend framework)
* **TypeScript** (type-safe JavaScript)
* **Framer Motion** (animations)
* **Vite** (build tool)

---

## 🚀 CI/CD Pipelines

In addition to building the application, I implemented CI/CD pipelines using **GitHub Actions** workflows to ensure high-quality code and automated deployment.

### 📋 static\_code\_analysis.yml

* Runs **linting** and **static code analysis**.
* Uses **CodeQL** for advanced security and quality scanning.
* Ensures only high-quality and secure code is merged.

### 🌐 deploy\_to\_page.yml

* Name: *Deploy to GitHub Pages*
* Trigger: Runs **only after** the `static_code_analysis_pipeline` completes successfully.
* Builds the project and deploys it to GitHub Pages.
* Uses the `gh-pages` branch as the source (configured under Pages → Source → Deploy from a branch).
* Ensures that only verified builds are published.

---

## 🔍 Code Review & Branching Strategy

In addition to building and deploying the application, I also implemented and followed **best practices for collaboration and code quality**:

* 📝 Performed **code reviews** on Pull Requests (PRs) to ensure code quality, maintainability, and adherence to standards.
* 🔀 Designed and followed a clear **branching strategy**:

  * `Prod` — protected, stable branch.
  * `development` — deployment branch for production-ready code.
  * Feature branches — created for new work or bug fixes, merged into `development` after PR review & CI success.
* 🔒 Enabled **branch protection rules**:

  * Required passing CI checks before merging.
  * Enforced PR reviews from peers or myself before merge.

These practices help ensure that the codebase stays clean, secure, and collaborative — aligning with real-world engineering workflows.

---
## Custom domain in github pages
 - https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

---

## 🐳 Future Work: Containerization & GitOps

I have already written a **multi-stage Dockerfile** to containerize the application.
Planned enhancements include:

* Adding a separate GitHub Actions workflow (`build_and_push_docker.yml`) to:

  * Build the Docker image.
  * Push the image to a private Docker registry.
* Setting up a Kubernetes cluster on AWS (using **kind**).
* Installing **ArgoCD** to implement GitOps:

  * Automatically update Kubernetes manifests with the new image tags.
  * Sync changes so that ArgoCD updates pods with the new image in the cluster.

---

## 📄 Summary

This project demonstrates not just front-end development with modern web technologies, but also:
✅ Secure, automated CI/CD pipelines.
✅ Deployment to GitHub Pages.
✅ Plans for containerization, GitOps, and cloud-native deployment.
