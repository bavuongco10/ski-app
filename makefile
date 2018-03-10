GIT_SHORT_SHA := $(shell git rev-parse --short=8 HEAD)
GIT_AUTHOR := $(shell git log -1 --format="%an")
# git tag, and only if on exact current commit:
GIT_TAG := $(shell git name-rev --name-only --tags --no-undefined HEAD 2>/dev/null)

set-git-vars:
	$(eval export JENIUS_GIT_SHORT_SHA="$(GIT_SHORT_SHA)")
	$(eval export JENIUS_GIT_AUTHOR="$(GIT_AUTHOR)")
	$(eval export JENIUS_GIT_TAG="$(GIT_TAG)")


# Launch web application in local dev server
start: set-git-vars
	node scripts/start.js

build: set-git-vars
	node scripts/build.js
