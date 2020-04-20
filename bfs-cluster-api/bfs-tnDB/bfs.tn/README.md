# setup bfs.tn

## install mysql 5.7

1. official method

- Ubuntu  
  [A Quick Guide to Using the MySQL APT Repository](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

- CentOS  
  [A Quick Guide to Using the MySQL Yum Repository](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/)

1. create a super user

e.g.

```sql
create user 'bfdb'@'%' identified by 'test123';
grant all privileges on *.* to 'bfdb'@'%';
flush privileges;
```

## install mongodb 4.x

1. official method

- [Install MongoDB Community Edition on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

- [Install MongoDB Community Edition on Red Hat or CentOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

2. create a super user

e.g.

```sql
use admin;
db.createUser({
    user:"bfdb",
    pwd:"test123",
    roles:["root"]
});
```

3. You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

```bash
sudo systemctl enable mongod
```

4. modify mongod.conf (usually at `/etc/mongod.conf`) to enable authorization, then restart mongod

<https://docs.mongodb.com/manual/reference/configuration-options/#security.authorization>

## install node.js v10 (prefer nvm method)

- nvm method

<https://github.com/nvm-sh/nvm>

> install node environment ONLY for current user, no sudo needed  
> The installer can use `git`, `curl`, or `wget` to download nvm, whichever is available.  

```bash
# it is normal to have connection issue form mainland to github, retry some times  
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
nvm install 10 # install node.js v10
```

- traditional method

<https://nodejs.org/en/download/>

## prerequisites

<https://docs.npmjs.com/using-npm/registry.html>

```bash
# optional
# warning: if your network is in mainland China, and you know what you are doing
npm config set registry https://registry.npm.taobao.org
# optional
```

mysql user(grant all privileges)  
mongodb user with root role(or no auth enabled)  
setup pm2 logrotate to prevent too many logs
<https://github.com/keymetrics/pm2-logrotate>

```bash
npm i pm2 -g # a node process manager
pm2 install pm2-logrotate
pm2 set # config log-rotate, e.g. max_size=1M, retain=10
pm2 update # restart pm2
```

## run this program

```bash
cd bfs.tn/dist
cp config.js.example config.js # !!!then edit this carefully!!!
cd ..
cp ecosystem.config.js.example ecosystem.config.js
npm i --production # install only production dependencies
pm2 start ecosystem.config.js
pm2 list # after few minutes check if it start correctly
pm2 logs # auto print logs of pm2 processes
```

## stop this program

```bash
pm2 list # show your processes
pm2 stop all # stop processes without delete records
pm2 delete all # stop processes and delete records
```

<!-- TODO 如何放到自启动 -->
