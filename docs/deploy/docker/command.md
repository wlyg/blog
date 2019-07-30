# Docker常用命令
```
安装: curl -s https://get.docker.com | bash  
添加ubuntu用户到docker用户组: sudo usermod -aG docker ubuntu  
切换到docker用户组: newgrp docker  
```
```
查找镜像: docker search NAME  
拉取镜像: docker pull [OPTIONS] NAME [:TAG]  
查看镜像列表: docker images [OPTIONS] [REPOSITORY[:TAG]]  
```
```
运行容器: docker run [OPTIONS] IMAGE[:TAG] [COMMAND] [ARG...]  
                -d 后台运行，返回容器Id  
停止容器: docker stop Id  
查看正在运行的容器: docker ps  
                -a 历史
重命名: docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]  
进入容器: docker exec [OPTIONS] CONTAINER COMMAND [ARG...]  
                docker exec -it id bash
停止所有容器: docker stop $(docker ps -a -q)  
删除所有容器: docker rm $(docker ps -a -q)  
删除所有镜像: docker rmi $(docker images -q)  
```
```
标记镜像:docker tag   
上传镜像:docker push
```
