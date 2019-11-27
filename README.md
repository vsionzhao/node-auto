# node-auto
使用node实现项目自动化构建和部署!

使用
---
1. 克隆项目代码：
```bash
git clone git@github.com:zhaorusheng/node-automatic-deployment.git my-project
cd my-project
```

2. 安装依赖.
```bash
npm install
```
或者

```bash
yarn install
```

3. 生成公钥和私钥
```bash
ssh-keygen -t rsa -C "your.email@example.com" -b 4096
```

4. 把公钥放到服务器的 `/root/.ssh/authorized_keys`中

5. 查看私钥的文件目录, 修改项目config/index.js中的`REPLACE_STRINGS.PRIVATE_KEY`, 也就是你私钥存放位置

6. 打开`config/index`文件，修改相应配置。

7. 启动本地服务
```bash
npm run start
```

8. 建议搭配`pm2`使用
