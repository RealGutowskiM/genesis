.PHONY: test tdd lint build clean all dev start

all: build

start: build
	node dist/app.js

dev: node_modules
	node src/main.mjs

tdd: node_modules
	npm run tdd

build: node_modules
	npm run build

test: lint
	npm test

lint: node_modules
	npm run lint

node_modules: package.json
	npm install

clean:
	rm -r node_modules
	rm -r dist/*