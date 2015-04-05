# Plan

Take stories out of the backlog:
- read it
- understand it
- discuss to fill in detalils
- label it (feature, improvement, bug)
- estimate it, if it takes more thon  day it needs to be split into more stories

# Work

- create a branch for the new feature, name it accordingly 
- make commits as often as possible, metaly break down the feature into tasks and make sure you commit ofter each task
- when possible write a test first (tdd)
- always write unit tests

# Code push

When the feature is completed push the code and open a pull request, ask for a review, push the extra changes if needed, squash and merge the changes.


# Deploy

Deploy via the bulid server, all test's should be green and code coverage should be good. (>95%)

# General notes

Plan the stories with at least on of your collegues.
Don't work on this out of the office, you can work on other related projects but keep the `work` in the office.

# Running the project

- install npm
- install the npm http server: ``sudo npm install -g http-server``
- navigate from the command line to the folder containing the repository and then to ``app``
- run ``http-server -c-1``
- navigate to: ``http://localhost:8080 ``

# Running the specs

 - install npm
 - install the following npm modules:
  - karma
  - karma-jasmine
  - karma-phantomjs-launcher
  - karma-html-reporter
  - karma-coverage
  - karma-requirejs
 - navigate to the spec folder
 - run ``karma start karma.conf.js``
