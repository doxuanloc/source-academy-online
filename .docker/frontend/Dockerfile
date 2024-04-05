FROM node:21.7.1-alpine

COPY ./.docker/frontend/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN ["chmod", "+x", "/usr/local/bin/entrypoint.sh"]

WORKDIR /app

EXPOSE 3000
ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
