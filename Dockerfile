FROM openjdk:8u102-jdk
FROM maven:3.3.9-jdk-8

MAINTAINER "Marco Molteni <javaee.ch>"

# set the path JAVA_HOME for maven
RUN export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64

# install git from debian repositories
RUN apt-get install -y git

# set the path of the working dir
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp

# install node.js
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# install tomcat
#RUN wget http://www.us.apache.org/dist/tomcat/tomcat-8/v8.5.5/bin/apache-tomcat-8.5.5.tar.gz
#RUN tar xzf ./apache-tomcat-8.5.5.tar.gz

# clone the repository with the code
RUN git clone git://github.com/marco76/SpringAngular2TypeScript.git

# install npm modules
WORKDIR /usr/src/myapp/SpringAngular2TypeScript/webClient/src
RUN npm install
# compile typescript files
RUN npm run tsc
#RUN npm run tsc:w 

# package the application
WORKDIR /usr/src/myapp/SpringAngular2TypeScript
RUN mvn package

RUN yes | cp -rf /usr/src/myapp/SpringAngular2TypeScript/server/target/angular2.jar /usr/src/myapp

# tomcat manual config
#RUN yes | cp -rf /usr/src/myapp/SpringAngular2TypeScript/webClient/target/client-0.1-SNAPSHOT.war /usr/src/myapp/apache-tomcat-8.5.5/webapps/ROOT.war
#WORKDIR /usr/src/myapp/apache-tomcat-8.5.5/bin
#RUN catalina.sh start &

####
# build with -t angular2-java-hello-world . 
# run with docker run --rm -it -p 8080:8080  angular2-java-hello-world java -jar /usr/src/myapp/angular2.jar