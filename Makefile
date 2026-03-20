# Configuration, override port with usage: make PORT=4200
PORT ?= 4200
REPO_NAME ?= ValorantSpinner
LOG_FILE = /tmp/jekyll$(PORT).log

SHELL = /bin/bash
# .SHELLFLAGS = -e # Exceptions will stop make, works on MacOS

# Phony Targets, makefile housekeeping for below definitions
.PHONY: default server convert clean stop

# Call server, then verify and start logging
# ...

# Call server, then verify and start logging
default: server

# Start the local web server
server: stop
	@echo "Starting server..."
	@nohup bundle exec jekyll serve -H 127.0.0.1 -P $(PORT) > $(LOG_FILE) 2>&1 & \
		PID=$$!; \
		echo "Server running at http://127.0.0.1:$(PORT) (PID: $$PID)"

# Stop the server and kill processes
stop:
	@echo "Stopping server..."
	@# kills process running on port $(PORT)
	@@lsof -ti :$(PORT) | xargs kill >/dev/null 2>&1 || true
	@echo "Stopping logging process..."
	@# removes log
	@rm -f $(LOG_FILE)