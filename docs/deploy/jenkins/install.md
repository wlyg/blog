# 安装
### Ubuntu安装jenkins
```
sudo apt-get install openjdk-8-jdk
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
echo deb http://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
sudo apt-get install jenkins
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
sudo visudo
jenkins ALL=(ALL) NOPASSWD: ALL
sudo systemctl start jenkins
sudo systemctl status jenkins
sudo systemctl restart jenkins
```