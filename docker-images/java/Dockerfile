# Use the latest OpenJDK base image
FROM openjdk:latest

# Set the working directory inside the container
WORKDIR /code

# Copy the Java file to the container's /code directory
COPY Main.java /code

# Compile the Java code
RUN javac Main.java

# Command to run the compiled Java code
CMD ["java", "Main"]