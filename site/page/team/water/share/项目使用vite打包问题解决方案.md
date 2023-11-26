# 什么是Vite
Vite 是 vue 的作者尤雨溪在开发 vue3.0 的时候开发的一个 基于原生 ES-Module 的前端构建工具。其作为一个基于浏览器原生ESM的构建工具，它省略了开发环境的打包过程，利用浏览器去解析imports，在服务端按需编译返回。同时，在开发环境拥有速度快到惊人的模块热更新，且热更新的速度不会随着模块增多而变慢。因此，使用Vite进行开发，至少会比Webpack快10倍左右。
**以下开始对于黄岩项目内遇到的各种vite打包部署线上出现的问题以及解决方案进行介绍：**
# 1.  Vite打包图片丢失问题
我们一般采取vite模块化导入工具import.meta.globEager和import.meta.glob来模块化导入图片，js文件等等，其可以实现对于路由，api的模块化封装。globEager是直接引入，而glob是动态引入，其会生产一个() => import("**")对象，调用对应属性时才会按需引入。以下的使用是导入mapStyle文件夹下所有的以.svg结尾的文件：

```javascript
export const imgsGlob = import.meta.globEager('.../assets/map/mapStyle/*.svg')
```

当配置了vite的resolve引入后  

![在这里插入图片描述](https://img-blog.csdnimg.cn/5be4893f81ba4058905cb06fe7fc9a62.png)

我们通常有以下三种导入路径写法
```
../assets/map/mapStyle/*.svg
/src/assets/map/mapStyle/*.svg
@/assets/map/mapStyle/*.svg （此方法是无效的）
```
以上写法除了第三种在开发环境就无效外，前两种写法在开发环境手动运行build打包时都不会出现问题，但是在线上CI打包时部分第二种根路径获取方法只会获得空而且不会报错，所以要采取第一种相对路径导入文件比较保险。

有一个值得忽视的问题是线下模块导入时**vite对于路径中地址的大小写不敏感**，也就是当识别到mapStyle文件夹不存在的时候其可以模块导入mapstyle，Mapstyle等等文件夹下的svg文件，还有就是在导入图片的时候如果路径上多了一个‘/’符号在本地也是可以正常运行，此问题在开发环境手动打包时也不会有问题，但是在线上CI环境打包时会更加严格，不会识别不同小大写字母的文件夹，包括多余的‘/’，会直接返回空的对象且不会有任何的报错，这很容易在排查的时候无法准确定位问题原因，所以这点要非常注意。
# 2. Vite关于使用问题Echarts问题
## 2.1 引入问题
在vue内我们一般推荐使用以下方式引入并使用

```javascript
import * as echarts from 'echarts'
```
但是在制作echarts和mapbox结合的效果时也就是使用glMap时此方式在Vite打包后会无法显示（开发环境可以），所以使用在此类场景使用echarts时要使用以下方式导入
```javascript
import echarts from 'echarts'
```
## 2.2 获取dom问题
Echarts获取dom时我们有时候会采用document.getElementByclassName()方法来获取一个或多个echarts的dom节点，在开发环境手动打包生成镜像部署后是没什么问题。但是这存在隐患，如果之前的class的dom节点没有销毁会无法获取指定元素。

在线上CI打包时，用class类名获取节点会出现第一次打开页面可以获得dom节点生成echarts图表，但是在第二次打开同样组件时就算之前已经销毁改组件，class类名没有重复，但是还是无法获取到该节点，echarts无法正常生成，且不会报错，线上存在vite+vue3的兼容性问题，推荐使用vue3的ref获取节点获取方法：

1.直接引用

```javascript
<div class="echarts-box" ref="echartsPie"></div>

setup内：
const echartsPie = ref('')

使用：
const chartOne = echarts.init(echartsPie.value)
chartOne.setOption(getChartOption())
```
2.toRefs模块绑定响应式引用

```javascript
setup内:
const data = reactive({
	echartsPie: ''
})

const { echartsPie } = toRefs(data)

使用：
const chartOne = echarts.init(data.echartsPie)
chartOne.setOption(getChartOption())
```
3.for循环获取多个dom

```javascript
<div class="ch-dom" v-for="(item, key) in [0, 1, 2, 3]" :key="key" :ref="el => star[key] = el"></div>

setup:
const star: HTMLElement[] = reactive([])
```
# 3. turf使用问题
在Vue3+Vite内使用turf时我们的导入方式一般是采用

```javascript
import * as turf from '@turf/turf'
```
在使用turf方法时，开发环境不会有什么问题，但是在vite打包后线上环境会导致整个页面白屏，就算代码内一开始并不会调用此方法的相关文件，需要点击特殊组件才会调用，但是还是会导致页面一打开就白屏。打开控制台显示如下错误：

```javascript
TypeError: Cannot read properties of undefined (reading 'default')
```
点击定位代码位置后会发现是关于turf的问题 

![在这里插入图片描述](https://img-blog.csdnimg.cn/5b82f7251cfa45e3b87841771d4e7b15.png)

尝试其他方式import turf和定位到turf部分方法使用报错，但是始终无法解决，最后采用html页面直接导入turf.js文件代替后不会出现此问题

```javascript
<script type="text/javascript" src="/public/static/turf.min.js"></script>
```
# 4. Vite打包警告过多问题
对于会报错的警告可以直接定位到工程进行修复，但是有时会出现明明项目运行不会有问题，但是却会出现很多警告扰乱控制台显示： 以下警告主要是一些规范问题 如果没有遵守可能在项目启动和打包的时候动则几十条警告，甚至几百条，严重影响对于开发人员对有用信息的定位和判断所以需要解决：

```javascript
1. warning: "@charset" must be the first rule in the file
2. warning: Unexpected ")"
3. .el-table :deep() .el-table__body-wrapper {
 the >>> and /deep/ combinators have been deprecated. Use :deep() instead.
```

第一种是提示@charset必须在文件夹的样式第一行使用，这个警告一但出现就是几十条起步的。这个一般是vite版本对于stylus，scss预处理语言和element使用时的兼容性问题，原因，sass编译的时候，因为被编译的文件里有中文导致的，比如element的样式文件。但是在less和element一起使用的时候不会出现以下问题。网上说在vite.config.js 内设置css的charset: false，但是发现没用所以采用以下配置：
```javascript
css: {
    postcss: {
         plugins: [
        {
                postcssPlugin: 'internal:charset-removal',
                AtRule: {
                       charset: (atRule) => {
                              if (atRule.name === 'charset') {
                                      atRule.remove();
                              }
                      }
                }
        }],
    },
}
```

第二第三条主要是深度选择器的样式规范问题，我总结有以下几点：
1. 不使用 /deep/和 >>>,因为已经淘汰
2. ::v-deep() 是element推荐的选择器，测试发现其可以有效的降低打包以后的文件大小，网上说可以提高运行速度还没有证实，经过测试：
```javascript
使用规范
::v-deep(.table)        正确        功能生效
::v-deep()  .table      控制台警告   功能生效
但是还是推荐使用:deep() 
使用规范
:deep (.table)          正确         功能生效
:deep ()  .table        控制台警告    功能生效
```

-------------------------10月17号更新--------------------------------
# 5.关于NodeJs打包报错问题
最近项目CI打包出现了很多NodeJs类型无法获取的问题，但是其实项目中已经安装了，且在本地打包没有问题，是由于TypeScript版本跟新以后出现的问题

![在这里插入图片描述](https://img-blog.csdnimg.cn/83cc6f1124d74a5ebab72ba178fb5832.png)

为了解决此问题我们需要配置tsconfig.ts让其载入node相关类型，在types中加入node

![在这里插入图片描述](https://img-blog.csdnimg.cn/515b3b485cad46aaa5f6a17bea0c8004.png)

并且将@types/node升级到较新版本，我这边暂时升级到了18.8.0的版本，现在比较稳定，最终再次提交线上ci打包完美通过了。以下附上我的TS版本

![在这里插入图片描述](https://img-blog.csdnimg.cn/0aaffd3c37b04c7cb05fc563b72b552e.png)
# 6.Volar相关问题
随着不久前Volar的1.0版本发布（vscode vue3插件），其将不在内置pug的类型解析功能，意味着你script内书写的变量暴露给模版后，其不会解析到相应的TS类型，你的变量如果只有在模版内使用会显示变量定义但是未被使用，这对于开发来说是看起来很不舒服的事情，且无法使用TS的优势所在

但是庆幸的是只需要在项目中安装以下插件就可以完美解决此问题，并且在tsconfig内配置
```
@volar/vue-language-plugin-pug
```

tsconfig配置

```javascript
{
    ..........
    "vueCompilerOptions": {
        "plugins": [
            "@volar/vue-language-plugin-pug"
        ]
    },
}
```

另外vue-tsc也需要升级到对应一致的版本，更好的兼容volar插件

比如：
```javascript
"vue-tsc": "^1.0.9"
"@volar/vue-language-plugin-pug": "^1.0.9",
```
# 7.动态引入图片问题
在原来我们使用vue2时是使用require动态获取到对应路径下的img图片以及资源等等，但是在vue3这变得比较困难，import.meta.globaEager以及await import属性引入都有些繁琐，当然也可以使用引入外部包来解决，但是下面推荐一种比较方便的方法：使用new URL语句
```javascript
new URL(`../assets/images/test.png`, import.meta.url).href
```
我们可以将他封装成公共方法
```javascript
export const getAssetsFile = (url: string) => {   
      return new URL(`../assets/images/${url.charAt(0) === '/' ?  url.slice(1) :  url}`, import.meta.url).href // 防止多写的'/'在线上ci环境打包获取不到资源
}
```
这样我们就可以方便的使用此方法来获取图片及相关资源了如下：

```javascript
<div>
     <img :src="getAssetsFile(`fiveWater/trophy-${index + 1}.png`)" alt="图片加载失败">
</div>
```

# 作者

<ContributorView name="马佳辉"></ContributorView>
