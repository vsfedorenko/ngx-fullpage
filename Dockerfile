FROM nginx:latest

MAINTAINER Vadim Fedorenko <meiblorn@gmail.com>

COPY build/bundles /usr/share/nginx/html
