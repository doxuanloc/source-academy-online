FROM node:21.7.1-alpine

COPY ./.docker/admin/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN ["chmod", "+x", "/usr/local/bin/entrypoint.sh"]

WORKDIR /app

EXPOSE 3001
ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
