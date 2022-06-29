FROM nginx:1.21-alpine

ENV NODE_ENV production

RUN rm /etc/nginx/conf.d/default.conf
COPY ./compose/nginx/nginx.conf /etc/nginx/conf.d
COPY ./dist /var/www/html

