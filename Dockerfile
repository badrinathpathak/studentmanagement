FROM node:8.11.3

MAINTAINER Badri Nath Pathak(badri.pathak@mindtree.com)

RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/student-manager

COPY src/ student-manager/


WORKDIR /usr/src/app/student-manager

RUN npm install


EXPOSE 8000

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
