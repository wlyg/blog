# Nginx
### Nginx代理jenkins
```
server {
    listen  80;
    server_name jenkins_domain;
    rewrite ^(.*)$  https://$host$1 permanent;
}
server {
    listen 443 ssl;
    server_name  jenkins_domain;
    ssl on;
	ssl_certificate ssl_crt_file_path;
	ssl_certificate_key ssl_key_file_path;
	ssl_session_timeout 5m;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
	ssl_prefer_server_ciphers on;

    location / {
        proxy_pass      jenkins_service;
        proxy_redirect  off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
### Nginx解析PHP
```
server {
    listen       80;
    server_name  php_api_domain;
    client_max_body_size 10M;

    location / {
        root   php_api_file_path;
        index  index.php index.html index.htm;
        try_files $uri $uri/ /index.php?$args;
    }
    location ~ \.php$ {
        root   php_api_file_path;
        fastcgi_index index.php;
        fastcgi_pass   php:9000;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```