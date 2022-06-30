# syntax=docker/dockerfile:1

FROM arm64v8/openjdk:18
EXPOSE 8080
ADD target/student-backend.jar student-backend.jar
ENTRYPOINT ["java", "-jar", "student-backend.jar"]

