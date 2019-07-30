# DockerFile
### 构建一个包含composer与npm的容器
```
FROM ubuntu:latest
MAINTAINER xxx xxx@xxx.com
ENV TZ Asia/Shanghai
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       tzdata \
    && dpkg-reconfigure tzdata
RUN apt-get install -y --no-install-recommends \
    php-mongodb \
    php-mbstring \
    php-xml \
    composer \
    npm
RUN composer config -g repo.packagist composer https://packagist.phpcomposer.com \
    && npm install -g cnpm --registry=https://registry.npm.taobao.org
WORKDIR /srv
```
```
 docker build [OPTIONS] PATH | URL | -
 docker push [OPTIONS] NAME[:TAG]
```