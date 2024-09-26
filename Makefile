DOCKER_IMAGE = tech-challenger
DOCKER_TAG = dev
KIND_CLUSTER_NAME = tech-challenger-cluster

.PHONY: all build start stop logs kind apply tests

all: build start kind apply

build:
	docker-compose up --build

start:
	docker-compose up -d

stop:
	docker-compose down

logs:
	docker-compose logs -f

kind:
	@echo "Creating Kind cluster..."
	docker run --rm -it \
		--privileged \
		--network host \
		kindest/node:v1.26.0 create cluster --name $(KIND_CLUSTER_NAME)

apply:
	@echo "Applying Kubernetes manifests..."
	docker run --rm -it \
		-v ${PWD}/.k8s:/manifests \
		--entrypoint kubectl \
		bitnami/kubectl:latest apply -f /manifests/metrics.yaml
	docker run --rm -it \
		-v ${PWD}/.k8s:/manifests \
		--entrypoint kubectl \
		bitnami/kubectl:latest apply -f /manifests/node-app-database.yaml
	docker run --rm -it \
		-v ${PWD}/.k8s:/manifests \
		--entrypoint kubectl \
		bitnami/kubectl:latest apply -f /manifests/node-app.yaml
	docker run --rm -it \
		-v ${PWD}/.k8s:/manifests \
		--entrypoint kubectl \
		bitnami/kubectl:latest apply -f /manifests/node-app-hpa.yaml

tests:
	@echo "Running stress tests..."
	docker run --rm -v ${PWD}:/tests \
		--entrypoint k6 \
		loadimpact/k6:latest run /tests/stress-test.js
