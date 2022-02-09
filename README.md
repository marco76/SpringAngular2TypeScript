# [Deprecated] SpringAngular2TypeScript

This was a cool project years ago, now you can find a new version here: (Post) https://marco.dev/deploy-java-angular-one (GitHub) https://github.com/marco76/java-angular-basic

This is an example of implementation of a 'Full Stack Web Application'.
Please note that this code is very experimental and regularly modified.

You can find the running app (deployed via docker) here: http://angular.cafe

Information about the development of this example in the blog here: http://javaee.ch

Stack:
- Spring Boot on the backend
- AngularJS 2 on the frontend
- TypeScript as frontend language
- packaging optimized by webpack

Prerequisites:
- install maven and npm

####For development (js server + java server):
1. Package the java project or launch Application.java from your IDE
 * mvn clean package 
2. launch the backend spring boot application, it runs in localhost:8082
    * java -jar [PARENT_MODULE]/server/target/server-0.14-SNAPSHOT.war
3. launch the webpack server for the frontend
    * cd [PARENT_MODULE]/webClient/src
    * npm start
4. go on http://localhost:8080

#####For production (only one war, Javascript souces optimized):
1. in the parent project directory execute
    * mvn clean package
2. launch the backend spring boot application, it runs in localhost:8082
    * java -jar [PARENT_MODULE]/server/target/server-0.14-SNAPSHOT.war
3. open your browser and visit http://localhost:8082
