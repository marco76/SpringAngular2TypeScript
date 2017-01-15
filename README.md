[![Build Status](https://travis-ci.org/marco76/SpringAngular2TypeScript.svg?branch=master)](https://travis-ci.org/marco76/SpringAngular2TypeScript)

# SpringAngular2TypeScript

This is an example of implementation of a 'Full Stack Web Application'.
Please note that this code is very experimental and continuosly modified.
- Spring Boot on the backend
- AngularJS 2 on the frontend
- TypeScript as frontend language
- packaging optimized by webpack

You can find some comments here: http://javaee.ch/2016/02/23/spring-boot-angularjs-2-typescript-hello-world-tutorial/

Prerequisites:
- install maven and npm

You can test the application using the docker file in this directory or
for development:
1. launch the backend spring boot application: ch.javaee.demo.angular2.Application, it runs in localhost:8082
2. launch the webpack server for the frontend: npm start
3. go on http://localhost:8080

For the production (only one jar):
1. in the parent project directory execute 'mvn package'
2. in the project server target directory execute 'java -jar server-0.1.3-SNAPSHOT.war'
3. open your browser and visit http://localhost:8082