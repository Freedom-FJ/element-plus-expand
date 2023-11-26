# 背景：
业务中发现我们的项目框架index主chunk有2mb大小，这大大影响了整个项目的性能，而且依赖引入比较冗余，所以再次进行打包优化。
# 分析：
首先我们安装插件
```javascript
rollup-plugin-visualizer
```
运行run build插件对于我们的打包文件生成chunk关系图如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/5be4893f81ba4058905cb06fe7fc9a62.png)
部分依赖文件如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/df081cf2b0e549eaa9a82c528d0681e0.png)
dist 文件16.7mb
明显问题：部分Chunk包过大，chunk包没有分离归类，可以看到比较大的文件是 element相关，vue，echarts，moment，lodash，xlxs插件
![在这里插入图片描述](https://img-blog.csdnimg.cn/44ae53a0d0a741d89c38f537ef3f7ca9.png)
接下来我们进行专门对几个较大依赖进行优化：

## Element-plus：
![在这里插入图片描述](https://img-blog.csdnimg.cn/a522953a9ebd435d94a8e6833897300b.png)
可以看到我们这里的element包已经超过了1mb，非常大，但是其实很多的element的组建我们都没有使用到，所以我们需要让其按需引入使用到的组建及依赖,而不是像我们之前那样整个都导入到项目中。我们可以使用unplugin插件来实现按需引入的效果
解决办法：
使用element按需引入
删除main.ts中对elementPlus的引入
![在这里插入图片描述](https://img-blog.csdnimg.cn/a8f406f2c861491d851419eb989f2878.png)
在vite中配置：

安装插件

unplugin-vue-components ，unplugin-auto-import

在vite.config内配置：
```javascript
// 引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置
plugins: [
   vue(),
   AutoImport({
       resolvers: [
           ElementPlusResolver(),
       ],
   }),
   Components({
       resolvers: [
           ElementPlusResolver()
       ]
   }),
```
再次打包，查看element-plus
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a74d86863a041acae0f54461d79834b.png)
从原来的1.32mb缩小到了232.55kb（缩小83%）

如果使用到了element-icon则同理（由于element-plus将element-icon单独独立出来一个依赖，所以如果我们使用了icon还需同样配置一下）
下载插件unplugin-icons
Vite配置：
```javascript
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

AutoImport({
   resolvers: [
       ElementPlusResolver(),
       // 自动导入图标组件
       IconsResolver({
           prefix: 'Icon',
       }),
   ],     
}),
Components({
   resolvers: [
       // 自动注册图标组件
       IconsResolver({
           enabledCollections: ['ep'],
       }),
       ElementPlusResolver()
   ]
}),
Icons({
   autoInstall: true,
}),
```

## Echarts：
![在这里插入图片描述](https://img-blog.csdnimg.cn/6eded301b85c44cda4f052e8faacc2aa.png)
可以看到echarts几乎占我们半壁江山，主要是因为echarts没有按需引入的功能，我们在平时使用的时候都是用 如下方式：
```javascript
import * as echarts from 'echarts'
```
也就是全部引入，其实里面大部分功能以及图表类型我们都使用不到所以我们需要配置echarts按需引入文档，将我们需要用到的依赖方法等引入其中，而我们使用的时候都是调用我们配置的echarts包，这样就可以有效的防止之前的情况：
在util文件夹下创建echarts文件夹
![在这里插入图片描述](https://img-blog.csdnimg.cn/524879f7681142d386ae06ccc46d35d9.png)
内部写入我们需要使用到的echarts依赖：
```javascript
// import echarts from 'echarts/lib/echarts' // 5.0以下的版本使用此方法引入
import * as echarts from 'echarts/lib/echarts.js' // 新版本用此方法引入

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/boxplot'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/graphic'
import 'echarts/lib/component/dataZoom'

export default echarts
```

配置symbol文件内（globalTs为定义的global类型），其主要是使provide可以类型校验，封装global方法的好处就是可以更好的管理依赖方法，也方便我们后期的全局维护，我们要用ES6的新类型symbol定义我们的provide入口，这样可以实现入口key的唯一性：

```javascript
export const globalKey: InjectionKey<globalTs> = Symbol('')
利用provide/inject 配合symbol入口配置全局global控制方法：
import echarts from '@/utils/echarts'
import { globalKey } from '@/symbols'
provide(globalKey, {
    dayjs,
    echarts,
    emitter
})
```

在需要用到echarts文件内使用，首先利用symbols引入global控制方法，然后调用echarts方法：

```javascript
import { globalKey } from '@/symbols'
const global = inject(globalKey)
const chart = global?.echarts.init(elementChart.value)
chart.setOption(lineOptions)
```
再次打包，echarts chunk大小从2.27mb变成了1.21mb（缩小了47%）：
![在这里插入图片描述](https://img-blog.csdnimg.cn/e3b91150c1b3475581639ee992223483.png)
## Vue
对于vue相关我们主要需要优化vue的依赖按需引入，用于简略我们在使用的时候重复的书写引入依赖
![在这里插入图片描述](https://img-blog.csdnimg.cn/331aeb4d09a64e8593212e85682df8a0.png)
我们借助autoImport以及eslint动态生成vue依赖（我们这边顺便把pinia以及vue-router的依赖也一起动态生成）

```javascript
AutoImport({
    include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
    ],
    imports: ['vue', 'vue-router', 'pinia'],
    eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true
    },
    // 声明文件生成位置和文件名称
    dts: './src/auto-import.d.ts'
}),
```

一开始需要配置enabled为true生成autoimport文件，至此在vue文件内使用vue依赖时就不需要一个一个引入了可以看一下使用对比：
优化前需要引入对于的vue依赖：
```javascript
import { ref } from 'vue'
const data = ref(0)
```
优化后可以直接使用无需引入：
```javascript
const data = ref(0)
```
而chunk大小从原来的266.89kb变成了255.75kb（缩小了4.2%）
![在这里插入图片描述](https://img-blog.csdnimg.cn/5fc456c82a96439ba171f3863aa27ac4.png)
## Lodash
![在这里插入图片描述](https://img-blog.csdnimg.cn/a4d8a840f2d5411b9784bc8d8f1553a8.png)

原来安装的是@types/lodash,在使用的时候他不会按需引入会直接整个引入占用较大空间，里面90%的方法我们都不会去使用，所以我采用lodash-es代替，其可以做到分割独立的方法按需引入生成chunk
使用的话直接引入部分方法就可以了
```javascript
import { cloneDeep } from 'lodash-es'
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e77ad60f953942a0a9f27834ddfb0d8f.png)
可以看到chunk大小从原来的531.24kb变成了35.26kb（缩小了93%）

## Moment
Moment包主要是因为里面内置了很多的语言包，占据了大部分内存，但是在我们工作中其实只需要中文语言包即可，且其方法也不会按需引入，是直接导出整个moment方法，导致我们打包的时候整个moment依赖都会打包但其实对于我们来说这是很冗余的，可以看到我们的moment包打包后有151.3kb
![在这里插入图片描述](https://img-blog.csdnimg.cn/379c4765841d43e7934c0a09db7552a5.png)
我们这边直接建议用dayjs来代替 卸载moment 安装dayjs
![在这里插入图片描述](https://img-blog.csdnimg.cn/bd77ebea25974dc79f6208e4608f7d30.png)可以看到chunk大小从原来的151.3kb变成了8.4kb(缩小了94%)

最后是删除不需要的依赖xlsx，框架中使用到了再引入
## 文件目录优化
自此关于依赖的优化就此结束了，打包后就可以看到以下依赖包结构：
![在这里插入图片描述](https://img-blog.csdnimg.cn/80c4eff46c1a4f878d3135984f17e9d0.png)
相比于之前依赖结构更小细化，chunk更小了
但是此时我们打包出来的文件结构较为混乱且不管是js，png，css文件都放在了assets文件夹下，没有分类非常不利于管理。于是我将chunk进行分割，分类命名存储。

在build下配置：

```javascript
build: {
   // 生成静态资源的存放路径
   assetsDir: 'static/img/',
   // chunk 大小警告的限制
   chunkSizeWarningLimit: 1500,
   rollupOptions: {
       output: {
           chunkFileNames: 'static/js/[name]-[hash].js',
           entryFileNames: 'static/js/[name]-[hash].js',
           assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
           // 解决打包时Some chunks are larger警告
           manualChunks(id) {
               if (id.includes('node_modules')) {
                   return id
                       .toString()
                       .split('node_modules/')[1]
                       .split('/')[0]
                       .toString()
               }
           }
       }
   },
}
```
再次打包后文件目录：
![在这里插入图片描述](https://img-blog.csdnimg.cn/354a55ed35c348c28e1cd84a7ba72a9f.png)
这样就结构分明了，文件分别放入了对于的文件夹下，且文件名称也很分明：
![在这里插入图片描述](https://img-blog.csdnimg.cn/53e3588fff4c4ecf9bf56ea155280a0f.png)
此时也就生成了如此美丽的chunk结构图了：
## 成果：
主JS包从原来的2315kb缩小到了236.58KB（优化90%）

## 压缩
如果线上服务器支持压缩可以引入vite-plugin-compression包进行依赖压缩
安装：
```javascript
yarn add vite-plugin-compression  --dev
```
引入
```javascript
import viteCompression from 'vite-plugin-compression'
```
配置plugins
```javascript
viteCompression({
   //gzip压缩
   deleteOriginFile: true, // 删除源文件
   verbose: true,
   disable: false,
   threshold: 10240,
   algorithm: 'gzip',
   ext: '.gz'
}),
```
打包后可以发现dist文件大小变成了13.2mb（压缩率17%）

补充：
引入问题： 
对于一些json文件我们习惯于会在setup顶部先import进来
```javascript
 import jsonData from '@static/json/yhWaterLine.json'
```
但是实际可能我们在页面一开始加载的时候不需要使用到此文件数据，这样就会有一个问题就是，这样打包的时候就会将此数据打包进主chunk包，不管你这个数据文件是存放在public下还是在assets下
所以此时我们建议在其触发的地方使用await import数据，这样就不会打包进主chunk包了
```javascript
yhWaterLine = await import('@static/json/yhWaterLine.json')
```

