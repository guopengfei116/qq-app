# 环境安装

## 运行环境

### Nvm

**nvm**是NodeJS的版本管理工具，使用它可以在本地安装管理多个不同版本的NodeJS，并根据需要动态切换。
如果已经安装过NodeJs，要安装nvm，要先卸载掉NodeJS。

Windows

- [windows下载地址]<https://github.com/coreybutler/nvm-windows/releases>
- 下载最新的一键安装版本`nvm-setup.zip`, 解压后傻瓜式安装即可。

配置淘宝镜像源

为了提高nvm在国内的下载速度，最好修改nvm的镜像下载地址。

找到 nvm 的安装目录，编辑 settings.txt 文件，添加如下配置，含义是使用淘宝镜像下载64位的node或npm。

```txt
arch: 64
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
iojs_mirror: https://npm.taobao.org/mirrors/iojs/
```

Mac

- [mac下载地址]<https://github.com/nvm-sh/nvm>
- 根据说明可通过命令安装`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

配置淘宝镜像源

为了提高 nvm 在国内的下载速度，最好修改 nvm 的镜像下载地址。

```shell
# 打开当前shell环境变量配置文件
~/.zshrc

# 加入如下环境变量
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_NPM_ORG_MIRROR=http://npm.taobao.org/mirrors/npm
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs

# 重载环境变量
source ~/.zshrc
```

### NodeJs

通过Nvm安装

1. 安装命令

```shell
nvm install 12.16.1
nvm use 12.16.1
```

```shell
nvm install stable
nvm list
nvm use xxx
```

2. 测试

```shell
node -v
npm -v
```

直接安装

1. 去官网手动下载安装包安装

- [官网]<https://nodejs.org/en/>
- [中文网]<http://nodejs.cn/>

2. 测试

```shell
node -v
npm -v
```

### Npm

npm 是 JavaScript 软件包管理器，默认安装 NodeJs 的时候会自动跟着安装。

为了提高国内下载速度，修改 npm 使用淘宝镜像源。

```shell
# 修改
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist

# 确认
npm config get registry
npm config get disturl
```

## 开发工具

### Vscode

- [官网下载]<https://code.visualstudio.com/>

### 安装插件

- Vetur
- ESLint
- EditorConfig for VS Code
- Node modules resolve
- Path Autocomplete
- vscode-icons
