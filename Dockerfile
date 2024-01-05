FROM nginx:1.17-alpine
COPY . /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/
EXPOSE 9080
CMD ["nginx", "-g", "daemon off;"]