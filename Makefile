WEBSITE_DIR                   = $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
MKFILES                       = $(shell find -L $(WEBSITE_DIR) -maxdepth 1 -mindepth 1 -type f -name "*.mk" | sort)
-include $(MKFILES)

# Website Rules {{{1
# Variables {{{2
SEARCH_DIR                    = ${HOME} ${HOME}/Projects #/Volumes/Elements/Documents
RESEARCH_DIR          	      = $(shell find -L $(SEARCH_DIR)  -type d -maxdepth 1 -mindepth 1 -name "research" 2>/dev/null)
TEACHING_DIR                  = $(shell find -L $(SEARCH_DIR)  -type d -maxdepth 1 -mindepth 1 -name "teaching" 2>/dev/null)
STUDENTS_DIR                  = $(shell find -L $(SEARCH_DIR)  -type d -maxdepth 1 -mindepth 1 -name "students" 2>/dev/null)

PROJECT_DIRS                  = $(shell find -L $(RESEARCH_DIR) $(STUDENTS_DIR) -maxdepth 1 -mindepth 1 -type d 2>/dev/null)
COURSE_DIRS                   = $(shell find -L $(TEACHING_DIR) -maxdepth 1 -mindepth 1 -type d 2>/dev/null)

WEBSITE_SRC                   = $(WEBSITE_DIR)/public
WEBSITE_DES                   = ~/public_html

# uhm's unix server has limited space
SSH_HOST                      = uhunix.hawaii.edu
SSH_PORT                      = 22
SSH_USER                      = yaozheng
RSYNC_PATH                    = /usr/bin/rsync

# amazon s3 bucket
S3_BUCKET                     = s3://gustybear-websites

# Rule to build webpages {{{2
.PHONY : build_webpages
build_webpages:
	# @academic import --overwrite --bibtex ./content/publication/yao-zheng.bib
	# @academic import --bibtex ./content/publication/yao-zheng.bib
	# @git submodule update --init --recursive --remote
	@rm -rf $(WEBSITE_SRC)
	@find . -name "Icon?" -exec rm {} \;
	@hugo mod clean
	@hugo mod get -u
	@hugo

# Rule to publish webpages {{{2
.PHONY : publish_webpages
publish_webpages: build_webpages
publish_webpages:
	@rsync -urzP --delete --rsync-path=$(RSYNC_PATH) $(WEBSITE_SRC)/ $(SSH_USER)@$(SSH_HOST):$(WEBSITE_DES)

# Rule to publish all {{{2
.PHONY : publish
publish: publish_webpages
	@for dir in $(PROJECT_DIRS) $(COURSE_DIRS); do \
		(echo "Entering $$dir."; $(MAKE) -C $$dir publish); \
	done

# Misc Rules {{{1
# Rule to link zsh {{{2
.PHONY : link_files
link_files: ;

# Rule to create GITHUB repo {{{2
# Run 'git config --global github.user <username>' to set username.
# Run 'git config --global github.token <token>' to set security token.
GITHUB_USER                       = $(shell git config --global --includes github.user)
GITHUB_TOKEN                      = :$(shell git config --global --includes github.token)
GITHUB_API_URL                    = https://api.github.com/user/repos
GITHUB_REPO_URL                   = git@github.com:$(GITHUB_USER)/$(notdir $(WEBSITE_DIR)).git

.PHONY : github_mk
github_mk:
ifdef GITHUB_USER
	@curl -i -u "$(GITHUB_USER)$(GITHUB_TOKEN)" \
		$(GITHUB_API_URL) \
		-d '{ "name" : "$(notdir $(WEBSITE_DIR))", "private" : true }'
	@git init
	@git add -A
	@git commit -m "First commit"
	@git remote add origin $(GITHUB_REPO_URL)
	@git push -u origin master
	@find $(WEBSITE_DIR) -type f -name "inputs.mk" \
		-exec sed -i.bak 's|\(^GITHUB_REPO[ ]\{1,\}=$$\)|\1 $(GITHUB_REPO_URL)|g' {} \;
	@find $(WEBSITE_DIR) -type f -name '*.bak' -exec rm -f {} \;
endif

# Debug Rules {{{1
# Rule to print makefile variables {{{2
print-%:
	@echo '$*=$($*)'
