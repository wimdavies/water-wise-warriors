FROM eclipse-temurin:21 AS build

WORKDIR /app
COPY . .

WORKDIR /app/api
RUN ./mvnw clean package -DskipTests

WORKDIR /app
FROM eclipse-temurin:21
EXPOSE 8080

COPY --from=build /app/api/target/api-1.0.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]