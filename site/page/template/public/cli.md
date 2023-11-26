# fpi-cli

## 进度

### 已完成

现阶段该脚手架可用于快速搭建微前端主、子应用，也支持创建通用的项目（需要整理出项目模板并且修改配置信息【配置信息见 update 指令】）。

1. init【初始化工程】
2. update【升级模板 --- 升级模板配置信息】
3. integration【主应用集成  --- 将子应用安装包暴露到一级目录】

### 未完成

应用的预购建、构建、卸载指令暂未开发，需要后期完善

1. pre-build【主应用与构建  --- 对子应用进行合法性校验（静态文件前缀是否合法、静态文件大小、性能是否达标等）】
2. build【主应用构建  --- 主应用构建，目前该指令暂时由主应用 scripts 中的 build 代替】

## 概述

该脚手架主要用于微前端【包括主应用和子应用（子应用暂时未整理模板）】模板工程搭建，集成。

## 使用

### 安装

```bash

npm install @ued_fpi/fpi-cli -g

```

### 创建项目

该指令主要用于快速创建主、子应用。

```bash

fpi init [projectName]

```

### 模板配置升级

该指令用于升级本地的项目配置信息，仓库中每一个分支对应一个工程模板，其中 config 分支主要用于存放配置信息。

[模板仓库地址](https://gitee.com/ued-fpi/web-fpi-cli-templete.git),


```bash

fpi update

```

### 主应用集成

该指令主要用于主应用集成子应用（把 npm 包内容对外暴露到一级目录，方便后期打包构建或者开发环境调试），该指令仅在 npm 方案集成时有用，使用该指令前请确保主应用的根目录下已经存在 app.config.yml 文件，内容格式如下：

```yaml

application:
  version: 1.0.0   ## 主应用版本号
  createTime: 2021-05-27
  publishTime: 2021-05-27
client: 'npm'      ## 依赖管理工具类型，可以是 npm 或 yarn
microserviceList:  ## 一下为个子应用的配置信息
  fpi-app2:        ## 子应用1名称
    package: @canyuegongzi/fpi-app2   ## 子应用1npm包
    version: 0.1.0                    ## 版本号
    name: fpi-app2                    ## 该名称主要用于注册子应用 
    packageDirectory: 'dist'          ## 子应用静态构建后的目录，一般不用修改
    entry: ''
```

```bash

fpi integration

```

## 开发

1. 修改 package.json 信息，执行 ```npm run build``` ```npm link```，该步骤的目的是允许在本地进行 cli 测试；
2. build 指令主要用于构建脚手架；

## 发布

1. ```npm run build``` ```npm publish --access public``` 发布包；
2. version 版本号必须是递增；
3. 为减少脚手架依赖信息，最好在发布前将 devDependencies 依赖信息移除掉。

## 微前端集成备注

1. 关键阶段慎用微任务，否则后续功能依赖关系会出现问题，如地图创建、插件注册；
2. 尽可能减少各在子系统数据共享；
3. 子系统裁剪插件，避免 app.js, vendors 过大（主系统需要通过 evel 运行），最好保持在1M之下；
4. 子系统及时回收大对象、大数据，避免内存泄漏问题。


## 贡献者

<ContributorView name="张尚飞,金琳欣"></ContributorView>