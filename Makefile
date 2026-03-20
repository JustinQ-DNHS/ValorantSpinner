# Set default port
PORT ?= 4200

.PHONY: default serve stop

default: serve

serve:
	@echo "Starting local server on http://127.0.0.1:$(PORT)"
	@python3 -m http.server $(PORT)

stop:
	@echo "Stop the server manually with Ctrl+C"