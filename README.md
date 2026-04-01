

# DevOps CI/ CD Project 1:

---

#### Project Architecture:

![1775027979216](image/README/1775027979216.png)

#### Project Introduction:

I built an end-to-end DevOps pipeline focused on real-world system design rather than just tool usage. The project is based on a microservices architecture using Node.js, where services communicate with each other to simulate production-like behavior.

I containerized the applications using Docker and deployed them on Kubernetes (Minikube), implementing service discovery and exposing them externally through Ingress. I then integrated GitOps using ArgoCD, ensuring that the cluster state is always in sync with Git, eliminating manual deployments.

To make the system observable, I exposed Prometheus metrics from the application and began monitoring system behavior. Along the way, I intentionally introduced failures and debugged issues across multiple layers, gaining a deeper understanding of how distributed systems behave in real-world scenarios.

---

#### Project Folder Structre:

![1775017454245](image/README/1775017454245.png)

---

#### Local Deployment Test:

![1775018049801](image/README/1775018049801.png)

![1775018082940](image/README/1775018082940.png)

![1775018144896](image/README/1775018144896.png)

![1775018182620](image/README/1775018182620.png)

![1775018275732](image/README/1775018275732.png)

![1775018321583](image/README/1775018321583.png)

![1775018471056](image/README/1775018471056.png)

![1775018567112](image/README/1775018567112.png)

![1775018950782](image/README/1775018950782.png)

---

#### GitOps Approach for Continuous Deployment:

![1775018967058](image/README/1775018967058.png)

![1775019504280](image/README/1775019504280.png)

![1775019866910](image/README/1775019866910.png)

![1775020152397](image/README/1775020152397.png)

---

#### Continous Integration 

![1775020461111](image/README/1775020461111.png)

![1775020680763](image/README/1775020680763.png)

![1775021113598](image/README/1775021113598.png)

![1775023604608](image/README/1775023604608.png)

![1775023632577](image/README/1775023632577.png)

---

#### Metrics Endpoints for Monitoring:

![1775024646100](image/README/1775024646100.png)

![1775025929069](image/README/1775025929069.png)

---
