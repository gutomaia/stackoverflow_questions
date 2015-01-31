PLATFORM = $(shell uname)

VERSION = ${shell node -e "console.log(require('./package.json').version);"}

OK=\033[32m[OK]\033[39m
FAIL=\033[31m[FAIL]\033[39m
CHECK=@if [ $$? -eq 0 ]; then echo "${OK}"; else echo "${FAIL}"; cat ${DEBUG} ; fi

WGET = wget -q --user-agent="Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"

SRC_JS = $(shell find lib tests -type f -iname "*.js")

NODE_BIN=./node_modules/.bin
NODE_CHECK=node_modules/.check
BOWER_CHECK=bower_components/.check
BOWER_INSTALLER_CHECK=bower_components/.check-installer

ifeq "" "$(shell which npm)"
default:
	@echo "Please install node.js"
	@echo "Visit http://nodejs.org/ for more details"
	exit 1
else
default: test
endif

${NODE_CHECK}: package.json
	@echo "NPM installing packages:"
	@npm install && touch $@
	${CHECK}

jshint:
	@${NODE_BIN}/jshint ${SRC_JS} --config jshint.config

build: ${NODE_CHECK} jshint

nodeunit:
	@${NODE_BIN}/nodeunit --reporter minimal tests/*_test.js

test: build nodeunit

clean:
	@find . -iname \*~ -delete

purge: clean
	@rm -rf node_modules

.PHONY: build nodeunit test clean purge
