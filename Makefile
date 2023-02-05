TARGETS := blog-front-by-react
TARGETS_BASE :=  blog-front-by-react-base
BUILD := $(shell git rev-parse --short HEAD)
VERSION := $(shell git rev-parse --abbrev-ref HEAD)-$(BUILD)

IMAGE_NAME :=  blog-front-by-react-service
IMAGE_VERSION := $(IMAGE_NAME):$(VERSION)
REGISTRY_ADDRESS ?= registry.hub.docker.com
IMAGE_FULLNAME := $(REGISTRY_ADDRESS)/deyu666/$(IMAGE_VERSION)
CURRENT_BRANCH_NAME := `git name-rev --name-only HEAD`
BASE_PRE := /it/

all: build

$(TARGETS):
	npm run build

build: $(TARGETS)

image: $(TARGETS)
	cp -f Dockerfile.j2 Dockerfile
	docker build -t $(IMAGE_FULLNAME) . --platform linux/amd64

image-push:
	docker push $(IMAGE_FULLNAME)

image-fullname:
	@echo $(IMAGE_FULLNAME)

.PHONY: all build build-base image image-fullname image-version clean