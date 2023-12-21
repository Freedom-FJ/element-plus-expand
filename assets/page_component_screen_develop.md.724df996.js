import{_ as a,J as n,o as l,c as o,N as e,V as p}from"./chunks/framework.2f197f38.js";const A=JSON.parse('{"title":"DataVisual","description":"","frontmatter":{},"headers":[],"relativePath":"page/component/screen/develop.md","filePath":"page/component/screen/develop.md","lastUpdated":1703128693000}'),t={name:"page/component/screen/develop.md"},c=p(`<h1 id="datavisual" tabindex="-1">DataVisual <a class="header-anchor" href="#datavisual" aria-label="Permalink to &quot;DataVisual&quot;">​</a></h1><h1 id="开发须知" tabindex="-1">开发须知 <a class="header-anchor" href="#开发须知" aria-label="Permalink to &quot;开发须知&quot;">​</a></h1><h2 id="工具和安装" tabindex="-1">工具和安装 <a class="header-anchor" href="#工具和安装" aria-label="Permalink to &quot;工具和安装&quot;">​</a></h2><p>工具及其版本<br> node: v16+<br> pnpm</p><p>安装 <code>pnpm install</code></p><h2 id="vscode插件" tabindex="-1">vscode插件 <a class="header-anchor" href="#vscode插件" aria-label="Permalink to &quot;vscode插件&quot;">​</a></h2><p><code>Eslint</code> <code>styleLint</code> <code>volar</code></p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ packages</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components                   // 组件库</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ amis                      // 大气</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ src                    // src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ AirQualityCalendar  // 空气质量大屏组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ ...                 // 其他文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ index.ts            // 组件汇总</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ index.ts               // 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ package.json           // package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ vite.config.ts         // vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ bmp                       // 中台</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ ipes                      // 园区</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ wgms                      // 水</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ host                         // host端</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ remote                       // remote端</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ play                            // 测试工程</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">第一阶段</p><p><span id="tow-MD"></span> 所有组件开发人员只需要关注 <code>packages/components</code> 下对应的业务线组件代码即可，在里面开发组件，并运行 pnpm play 进行组件功能的测试，其他工程不需要关注。</p></div><div class="tip custom-block"><p class="custom-block-title">第二阶段</p><p>当组内组件基本开发完成后,由 <code>组长</code> 运行 <code>pnpm build:remote</code>, 然后运行 <code>pnpm remote</code> 启动远端服务，再运行 <code>pnpm host</code> 启动本地测试服务，进行组内组件的模块联邦测试工作，并将问题提交给组内对应作者进行修改，详细内容请看下<a href="#host端测试须知"><code>host端测试须知</code></a>。</p></div><p>注意：host 端 和 remote端代码修改不要提交！！</p><h2 id="组件库规范" tabindex="-1">组件库规范 <a class="header-anchor" href="#组件库规范" aria-label="Permalink to &quot;组件库规范&quot;">​</a></h2><ol><li>组件命名:</li></ol><blockquote><p>组件文件夹需要大驼峰的风格<br> 组件子文件 遵循小驼峰或非驼峰形式，不同文件分类需要放入对应的文件夹内：<br> 组件入口文件为 index.ts 用于暴露组件<br> 组件主体为 index.vue 例如：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ AirQualityCalendar  // 空气质量大屏组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├─ images          // 组件图片</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │  ├─ air.png</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├─ style           // 组件样式</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │  ├─ index.scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├─ components      // 组件子组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │  ├─ test.vue     </span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├─ api             // 组件子请求</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │  ├─ index.ts     </span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├─ index.vue       // 组件主体</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├─ index.ts        // 组件暴露</span></span></code></pre></div><blockquote><p>组件入口文件 index.ts,具名导出组件时需要加上 <code>dv-[ipes/wgms/aims/bmp]-</code> 前缀,并转换为大驼峰，为了防止组件名称重复情况！！</p></blockquote><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">install</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../utils/tools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> _DrinkingWaterComplianceRate </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// export const DrinkingWaterComplianceRate = install(_DrinkingWaterComplianceRate)</span></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> DvWgmsDrinkingWaterComplianceRate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">install</span><span style="color:#A6ACCD;">(_DrinkingWaterComplianceRate)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> _DrinkingWaterComplianceRate</span></span></code></pre></div><ol><li>在<code>packages/components</code>下分为<code>ipes</code>、 <code>aims</code>、 <code>wgms</code>、 <code>bmp</code>、 <code>commons</code>，分别对应开发一组、开发二组、开发三组、平台二组和公共。</li><li>组件最外层dom class：<code>dv-[ipes/wgms/aims/bmp]-{componentName}</code> ， 例如：</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dv-wgms-data-picker</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dv-wgms-data-picker-top</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        头部</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dv-wgms-data-picker-top</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dv-wgms-data-picker-bottom</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        底部</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dv-wgms-data-picker-bottom</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dv-wgms-data-picker</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ol><li>所有style必须以外链 string 的形式引入 例如：</li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../styles/mixins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./style/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ol start="5"><li>开发完成的组件应在<code>packages/components/xxx/src/index.ts</code>中导出，如下（因为批量导出会失去类型所以辛苦各位每个组件都手写导出一下）</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./FactorRealTimeRank</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="组件库使用" tabindex="-1">组件库使用 <a class="header-anchor" href="#组件库使用" aria-label="Permalink to &quot;组件库使用&quot;">​</a></h2><p>在各组的组件库<code>packages/components/xxx</code>内开发组件,并在<code>packages/components/xxx/src/index.ts</code>中导入并暴露</p><p>在项目根目录中使用<code>pnpm play</code>命令启动项目，可在<code>/play/src/App.vue</code>中导入组件查看效果</p><p>项目使用pnpm workspace + lerna, 可使用软链在<code>play</code>中导入组件库中的组件，例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AirQualityCalendar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@data-visual/aims</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @data-visual/aims 为组件库的package.json.name</span></span></code></pre></div><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h2><p>所有commit提交必须规范，请以如下格式提交，前缀类型请参考 <code>commitlint.config.js</code> 文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 格式: {type}({wgms/bmp/aims/ipes}): ** \`{ componentName }\` **  </span></span>
<span class="line"><span style="color:#A6ACCD;">feat(wgms): 制作\`EnvironmentalAnalysis\` 空气质量组件</span></span>
<span class="line"><span style="color:#A6ACCD;">fix(bmp): 修复\`TestCom\` 数据过多换行问题</span></span>
<span class="line"><span style="color:#A6ACCD;">docs(aims): 书写 \`FactorRealTimeRank\` 文档</span></span></code></pre></div><p><code>: </code> 是英文，中文会无法提交</p><h2 id="host端测试须知" tabindex="-1">host端测试须知 <a class="header-anchor" href="#host端测试须知" aria-label="Permalink to &quot;host端测试须知&quot;">​</a></h2><p>以下内容全权由组长阅读，启动相关请看上部<a href="#tow-MD">第二阶段</a>。</p><ol><li>由于链接地址导致在host端无法正确获取到png,svg 等资源，并且打包也会失去相关资源，我们暂时统一采用base64方式引入，所以项目中不可以出现 <code>new URL</code> 方式引入图片, 所有涉及到动态引入图片资源的请使用import引入。例如：</li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wind_direction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> wind_direction </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./images/wind_direction.svg</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ol start="2"><li>当运行host端时，注意使用localhost访问，而不是 127.0.0.1，不然会获取不到shared资源。</li></ol><p>涉及到相关其他问题请反馈 <code>马佳辉</code> <code>王腾</code> 。</p><h2 id="readme书写" tabindex="-1">readme书写 <a class="header-anchor" href="#readme书写" aria-label="Permalink to &quot;readme书写&quot;">​</a></h2><p>每一个组件都必须书写readme，才算完整完成，readme包括</p><blockquote><ol><li>例子,请用 <code>\`\`\`vue</code> 和 <code>\`\`\`</code> 包裹会在远端显示对应组件。</li><li>属性，方法，事件，插槽等。</li><li>作者,请使用 <code>ContributorView</code> 组件， 同样也需要使用 <code>\`\`\`vue</code> 包裹。</li></ol></blockquote><p><a href="http://ued.fpi-inc.site/fpi-component/sreenDemo.md" target="_blank" rel="noreferrer">点击查看readme示例文件</a></p><h2 id="文档贡献" tabindex="-1">文档贡献 <a class="header-anchor" href="#文档贡献" aria-label="Permalink to &quot;文档贡献&quot;">​</a></h2>`,44);function r(i,D,d,y,C,F){const s=n("ContributorView");return l(),o("div",null,[c,e(s,{name:"马佳辉,王腾"})])}const h=a(t,[["render",r]]);export{A as __pageData,h as default};
