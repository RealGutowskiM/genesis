.PHONY: test tdd lint format clean all dev start

all: test

start: node_modules
	node bin/prod.js

dev: node_modules
	node bin/dev.mjs

tdd: node_modules
	npm run tdd

test: lint
	npm test

lint: node_modules
	npm run lint

format: node_modules
	npm run fix

node_modules: package.json
	npm install

clean:
	rm -r node_modules
	rm -r dist/*