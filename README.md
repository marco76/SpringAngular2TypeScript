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
1. install node.js
2. install typescript
3. in the webClient/src/ directory there is the package.json.
    Launch 'npm install' and 'npm run tsc'
4. in the project directory execute 'mvn package'
5. in the server/target directory execute 'java -jar angular2.jar'
6. open your brower and visit 'localhost:8080'

I will simplify the procedure soon.
