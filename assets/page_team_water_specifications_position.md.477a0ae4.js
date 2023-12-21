import{_ as s,o as a,c as n,V as p}from"./chunks/framework.c4e3e1ab.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"page/team/water/specifications/position.md","filePath":"page/team/water/specifications/position.md","lastUpdated":1703130980000}'),e={name:"page/team/water/specifications/position.md"},l=p(`<nav class="table-of-contents"><ul><li><a href="#目录结构">目录结构</a><ul><li><a href="#components">components</a></li><li><a href="#api目录">Api目录</a></li></ul></li></ul></nav><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vue3-template</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ api  // 请求api</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ assets // 静态资源包括 fontFamily images svg等等</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components // 公共通用性组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ config // 服务相关以及线上环境配置信息</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ layouts // 页面布局组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ router // 动态路由逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ service // 请求封装</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ store // pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ styles // 公共样式 以及unocss公共文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ types // 公共类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ utils // 所有工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ staticData.ts // 静态文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ tools.ts // 公共工具</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ views // 路由页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ map // map 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ map.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ components // map内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ home // home 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ home.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ components // home内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ....... // home 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ symbols.ts // 全局唯一标识数据存储 例如定义provide key</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ auto-import.d.ts</span></span></code></pre></div><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;components&quot;">​</a></h3><p>目录公共 <code>components</code>存放在 <code>src/components</code> 下，所有 <code>views</code> 内部的文件且不会公共用到的都存放在 当前页面文件夹下。如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ views // 路由页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ map // map 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ components // map内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ map-top.vue // map内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ map-bottom.vue // map内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ map.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ home // home 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ components // home内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ home-top.vue // map内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ home-bottom.vue // map内部组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ types.ts // map内部工具</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ home.vue</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>所有的<code>components</code>文件夹下的组件名称都不要重复 所有的<code>view</code>下的路由组件（也就是非<code>components</code>组件）的名称相互间都不要重复</p></div><h3 id="api目录" tabindex="-1">Api目录 <a class="header-anchor" href="#api目录" aria-label="Permalink to &quot;Api目录&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ api // 存放api接口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ map // api的个个模块文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ index.ts // 存放接口api</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ types.d.ts // 存放接口传参类型，相应类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ public</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ types.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ index.ts // 全部api模块导入</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ service</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ base-serve.ts // 服务文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ request.ts // 请求核心，请求拦截，响应拦截，请求控制器</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ types.ts // api核心类型</span></span></code></pre></div>`,9),o=[l];function t(c,i,r,A,C,m){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{d as __pageData,D as default};
