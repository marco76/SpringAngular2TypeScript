[![Build Status](https://travis-ci.org/marco76/SpringAngular2TypeScript.svg?branch=master)](https://travis-ci.org/marco76/SpringAngular2TypeScript) [![codecov](https://codecov.io/gh/marco76/SpringAngular2TypeScript/branch/master/graph/badge.svg)](https://codecov.io/gh/marco76/SpringAngular2TypeScript) [![star this repo](http://githubbadges.com/star.svg?user=marco76&repo=SpringAngular2TypeScript&style=default)](https://github.com/marco76/SpringAngular2TypeScript)
[![fork this repo](http://githubbadges.com/fork.svg?user=marco76&repo=SpringAngular2TypeScript&style=default)](https://github.com/marco76/SpringAngular2TypeScript/fork)

# SpringAngular2TypeScript

This is an example of implementation of a 'Full Stack Web Application'.
Please note that this code is very experimental and regularly modified:

- Spring Boot on the backend
- AngularJS 2 on the frontend
- TypeScript as frontend language
- packaging optimized by webpack

You can find some comments here: http://javaee.ch/2016/02/23/spring-boot-angularjs-2-typescript-hello-world-tutorial/

Prerequisites:
- install maven and npm

####For development (js server + java server):
1. launch the backend spring boot application, it runs in localhost:8082
    > java -jar [PARENT_MODULE]/server/target/server-0.14-SNAPSHOT.war
2. launch the webpack server for the frontend: npm start
    from [PARENT_MODULE]/webClient/src
    > npm start
3. go on http://localhost:8080

#####For production (only one war, souces optimized):
1. in the parent project directory execute 'mvn package'
2. in the project server target directory execute 'java -jar server-0.1.4-SNAPSHOT.war'
3. open your browser and visit http://localhost:8082
