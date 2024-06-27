FROM eclipse-temurin:21

WORKDIR /app

COPY ./api/mvn/ ./api/mvn
COPY ./api/mvnw pom.xml ./api/
RUN ./api/mvnw dependency:go-offline

COPY ./api/src ./api/src
COPY ./frontend ./frontend

CMD ["./api/mvnw", "clean package"]

FROM eclipse-temurin:21
EXPOSE 8080

COPY --from=target /api/target/api-1.0.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]