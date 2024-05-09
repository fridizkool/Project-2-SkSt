# Use a base image with Maven and JDK installed
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven configuration files
COPY pom.xml .

# Copy the project source code
COPY src src/

# Build the application using Maven
RUN mvn clean package -DskipTests

# Create a new stage for the final image
FROM eclipse-temurin:17

# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file from the previous stage
COPY --from=build /app/target/taxprep-0.0.1-SNAPSHOT.jar .

# Expose the port your application runs on
EXPOSE 8080

ENV DB_URL=$DATABASE_URL
ENV DB_USERNAME=$DB_USERNAME
ENV DB_PASSWORD=$DB_PASSWORD

# Command to run the application
CMD ["java", "-jar", "taxprep-0.0.1-SNAPSHOT.jar"]
