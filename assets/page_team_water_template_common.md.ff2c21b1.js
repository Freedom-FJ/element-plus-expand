import{_ as a,J as n,o as l,c as p,N as o,V as e}from"./chunks/framework.2f197f38.js";const m=JSON.parse('{"title":"基础模版","description":"","frontmatter":{},"headers":[],"relativePath":"page/team/water/template/common.md","filePath":"page/team/water/template/common.md","lastUpdated":1703128693000}'),t={name:"page/team/water/template/common.md"},c=e(`<h1 id="基础模版" tabindex="-1">基础模版 <a class="header-anchor" href="#基础模版" aria-label="Permalink to &quot;基础模版&quot;">​</a></h1><blockquote><p>Vue 3 + TypeScript + Vite<br> node 16.4.0<br> npm 7.18.1</p></blockquote><p>基础架构模版，采用 <code>vue3</code>,<code>vite4</code>, <code>pinia</code>, <code>typescript4.8</code>, <code>unocss</code>,<code>element-plus</code>, <code>element-plus-expand</code>,<code>element-plus-expand</code> 等等依赖，内部还有严格的<code>eslint</code>,<code>styleLint</code>,<code>commit-husky</code>校验规则，可以快速搭建后台管理项目。<a href="https://git.fpi-inc.site/wangtian/vue3-screen-template" target="_blank" rel="noreferrer">gitlab地址</a></p><p><img src="http://wgms.dev.fpi-inc.site/file-base-server/api/v1/sys/download/e31a8f8f96f0490b8f7cf5c3a51cdb8c" alt="在这里插入图片描述"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>安装完依赖后需重新打开vscode文件错误提示就会消失</p></div><h2 id="_1-vscode插件" tabindex="-1">1.vscode插件： <a class="header-anchor" href="#_1-vscode插件" aria-label="Permalink to &quot;1.vscode插件：&quot;">​</a></h2><p>此模版需要配合安装的vscode插件:<br><code>stylelint</code> css样式检查插件<br><code>eslint</code> js，ts代码检查<br><code>Volar</code> vue3相关<br><code>unocss</code> css原子化提示插件 文档： <a href="https://uno.antfu.me" target="_blank" rel="noreferrer">unocss</a></p><h2 id="_2-内置检查" tabindex="-1">2.内置检查 <a class="header-anchor" href="#_2-内置检查" aria-label="Permalink to &quot;2.内置检查&quot;">​</a></h2><p>stylelint eslint commitLint 请设置vscode保存自动检查语法<br> 内置了 <code>@antfu/eslint-config</code> 有很强的代码检查和格式化能力，可以很好的规范我们的代码，请务必要安装相关vscode插件。<br> commitlint 提交规范请查看<code>commitlint.config.js</code>文件，通用格式： <strong>feat: 增加了新功能</strong></p><ul><li>tips：提交校验失败时，发现修改的文件都消失了，不要慌，执行<code>git stash pop</code>操作即可恢复</li></ul><h2 id="_3-config及关于启动代理" tabindex="-1">3.config及关于启动代理： <a class="header-anchor" href="#_3-config及关于启动代理" aria-label="Permalink to &quot;3.config及关于启动代理：&quot;">​</a></h2><p>在vite.config.ts内修改<code>proxy</code>后，还需要在<code>config/index.ts</code>内修改相应的请求地址:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// const defaultHost = &#39;https://wgms-test.fpi-inc.site&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const defaultHost = &#39;http://wgms.dev.fpi-inc.site&#39;</span></span></code></pre></div><p>线上环境无需修改config，会自动读取当前运行地址<br><code>isMustLogin</code> 是否需要登录项目 在本地开发时可以设置为false进行无登录开发</p><h2 id="_4-文件及变量命名规则" tabindex="-1">4.文件及变量命名规则： <a class="header-anchor" href="#_4-文件及变量命名规则" aria-label="Permalink to &quot;4.文件及变量命名规则：&quot;">​</a></h2><p><strong>文件：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">文件夹 map，map-service  小写横杠 </span></span>
<span class="line"><span style="color:#A6ACCD;">ts文件名称： map.ts，map-service.ts  小写横杠  </span></span>
<span class="line"><span style="color:#A6ACCD;">vue文件名称： map.vue，map-service.vue  小写横杠</span></span></code></pre></div><p><strong>ts类型：</strong><br> 普通类型大写开头， Ts结尾： PublicTs MapTs<br><code>api</code>请求相关namespace类型，全大写，_连接，以<code>API_REQUEST</code>或<code>API_RESPONSE</code>结尾(由于此api命名空间会注入全局，所以希望严格准守命名规则不然容易污染全局)，例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">PUBLIC_API_REQUEST   </span><span style="color:#676E95;font-style:italic;">// \`REQUEST\`请求参数namespace  </span></span>
<span class="line"><span style="color:#A6ACCD;">PUBLIC_API_RESPONSE  </span><span style="color:#676E95;font-style:italic;">// \`RESPONSE\`响应参数namespace</span></span></code></pre></div><p>命名空间内部类型命名可以自定义，可以以请求方法的名称命名</p><h2 id="_5-api请求说明" tabindex="-1">5.api请求说明 <a class="header-anchor" href="#_5-api请求说明" aria-label="Permalink to &quot;5.api请求说明&quot;">​</a></h2><h3 id="目录结构" tabindex="-1">目录结构： <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ api // 存放api接口文件</span></span>
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
<span class="line"><span style="color:#A6ACCD;">│  └─ types.ts // api核心类型</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用： <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用：&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 配置</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getSystemMenus </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PUBLIC_API_REQUEST</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">getSystemMenus</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">option</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">apiObjTs</span><span style="color:#89DDFF;">={}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Request</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PUBLIC_API_RESPONSE</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">getSystemMenus</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api/v1.0/permissions/systemMenus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 请求地址</span></span>
<span class="line"><span style="color:#F07178;">        server</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bspPermissionServer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 服务地址，默认可以在config内配置</span></span>
<span class="line"><span style="color:#F07178;">        method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 请求类型 默认get</span></span>
<span class="line"><span style="color:#F07178;">        headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 请求头</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/json</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        isIntercept</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 是否推入全局的请求拦截队列 拦截方法见下：</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">baseURL</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 代理 默认/api 可以不传，除非你要本地调试自定义代理</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 请求参数 get类型要传params</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">option</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 自定义扩展参数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import * as publicApi from &#39;@/api/public&#39; // 全部导入-不建议</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getSystemMenus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/public</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 单个请求导入</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import { PublicApi } from &#39;@/api&#39; // 通过index导入整个请求文件夹-不建议</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> systemCode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wgmsAnalysisDiagnose</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据权限获取菜单信息</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getHttpAuth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">publicApi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSystemMenus</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">systemCode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/json;charset=UTF-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="请求拦截-拦截队列清空" tabindex="-1">请求拦截，拦截队列清空： <a class="header-anchor" href="#请求拦截-拦截队列清空" aria-label="Permalink to &quot;请求拦截，拦截队列清空：&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useAxiosStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/store/axios</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> axiosStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useAxiosStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">axiosStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearIntercept</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 拦截最新一条请求，并删除</span></span>
<span class="line"><span style="color:#A6ACCD;">axiosStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearIntercept</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 拦截全部并清空拦截队列</span></span></code></pre></div><h2 id="_6-路由" tabindex="-1">6.路由 <a class="header-anchor" href="#_6-路由" aria-label="Permalink to &quot;6.路由&quot;">​</a></h2><p>所有view文件夹下非 <code>components</code>文件夹下的vue文件都会被根据路径设置为按需引入的路由</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ views</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ home</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue </span><span style="color:#676E95;font-style:italic;">// 解析为路由 path: /home name: home （注意避免名称重复）</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ form</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ top</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue  </span><span style="color:#676E95;font-style:italic;">// 解析为路由 path: /form/top name: top （注意避免名称重复）</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components </span><span style="color:#676E95;font-style:italic;">// 存放该路由业务相关组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ button</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vue </span><span style="color:#676E95;font-style:italic;">// 不会被解析为路由，会被动态引入组件引入 模版内可以直接使用无需引入（注意避免名称重复）</span></span></code></pre></div><h2 id="_7-组件" tabindex="-1">7.组件 <a class="header-anchor" href="#_7-组件" aria-label="Permalink to &quot;7.组件&quot;">​</a></h2><p>内置组件：<br><code>fpi-cascader</code>, <code>side-layout</code>, <code>fpi-menu</code>, <code>fpi-tree</code></p><h2 id="_8-目录结构" tabindex="-1">8.目录结构 <a class="header-anchor" href="#_8-目录结构" aria-label="Permalink to &quot;8.目录结构&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vue3-template</span></span>
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
<span class="line"><span style="color:#A6ACCD;">│  ├─ views // 路由页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ symbols.ts // 全局唯一标识数据存储 例如定义provide key</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ auto-import.d.ts</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>所有的<code>components</code>文件夹下的组件名称都不要重复 所有的<code>view</code>下的路由组件（也就是非<code>components</code>组件）的名称相互间都不要重复</p></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,36);function r(i,y,D,F,C,A){const s=n("ContributorView");return l(),p("div",null,[c,o(s,{name:"王田,马佳辉"})])}const u=a(t,[["render",r]]);export{m as __pageData,u as default};
