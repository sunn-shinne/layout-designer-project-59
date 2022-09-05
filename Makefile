install
	npm ci

lint
	npx stylelint ./app/scss/**/*.scss

deploy
	npx surge ./src/build