# Use the Python 3.8 image as the base image
FROM python:3.8
            
# Install any necessary packages or tools
# Update package list
RUN apt-get update

# Install necessary packages
RUN apt-get install -y --no-install-recommends \
    wget \
    ca-certificates \
    curl \
    git \
    gnupg \
    lsb-release \
    unixodbc-dev \
    gcc \
    libldap-dev \
    libsasl2-dev \
    sudo

# Clean up package cache
RUN apt-get clean

# Set the image name and version as labels
LABEL maintainer="Your Name guptron1@gmail.com"
LABEL version="1.0"
LABEL description="Django application Docker image"



# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# db credential 
ENV NAME postgres
ENV PASSWORD puru21shiv
ENV DATABASE docker
ENV PORT 5432 
ENV HOST zippe_postgres




# Create a directory for your project inside the container
ENV DOCKER=/home/backend
RUN mkdir -p $DOCKER
WORKDIR $DOCKER

# Copy the current directory (including manage.py) into the container
COPY  .  $DOCKER/

# Upgrade pip and install project dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port 8000 for your Django application
EXPOSE 8000

# Define the command to run when the container starts
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD tail -f /dev/null

