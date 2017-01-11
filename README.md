# SpringAngular2TypeScript

This is an example of implementation of a 'Full Stack Web Application'.
Please note that this code is very experimental and continuosly modified.
AngularJS 2 is still in beta and the intregration of all the stack (using maven, grunt, bower, ...) is not stable yet.

- Spring Boot on the backend
- AngularJS 2 Beta on the frontend
- TypeScript as frontend language

It's mainly a test to verify the maturity of AngularJS 2 and how the technologies integrates together.
You can find some comments here: http://javaee.ch/2016/02/23/spring-boot-angularjs-2-typescript-hello-world-tutorial/

You can test the application using the docker file in this directory.

If you want to build from the sources:
- install maven and npm
- in the parent project directory execute 'mvn package'
- in the project server target directory execute 'java -jar angular2.jar'
- open your brower and visit 'localhost:8080'
