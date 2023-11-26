[[toc]]
## 文件命名
文件与文件夹命名全部采取 `-`横杠连接形式，不采用大小驼峰，包括所有`.ts, .js, .md, .vue, .jsx, .tsx, .d.ts`, 例如：  
##### ❌ bad
```
├─ Api 
│  ├─ Index.ts
│  └─ types.d.ts

├─ markFile 
│  ├─ index.ts

├─ markFile 
│  ├─ tableData.ts
```


##### ✔️ good
```
├─ api 
│  ├─ index.ts
│  └─ types.d.ts

├─ mark-file 
│  ├─ index.ts

├─ mark-file 
│  ├─ table-data.ts
```

## 变量命名
### 方法，变量
变量都需要采用英文语意化命名，单词有简写形式可以简写，不可以无故创造简写; 多个单词以小驼峰相连。
##### ❌ bad
```js
const Locale = 'zhCn'

const dataarr = ['1', '2']

const DrinkEmergencyControl = () => console.log('test')

const getTestfun = () => console.log('test')

```


##### ✔️ good
```js
const locale = 'zhCn'

const dataArr = ['1', '2']

const drinkEmergencyControl = () => console.log('test')

const getTestFun = () => console.log('test')

```

### class 类
class 类 需要大驼峰命名
##### ❌ bad
```js
class subject {}

class subjectTest {}

```

##### ✔️ good
```js
class Subject {}

class SubjectTest {}
```

### 字典参数
所有字典相关变量都需要全部大写，多个单词以 `_` 相连。

##### ❌ bad
```js
const mapLayerDic = {
    commonMapPoint: 'common-map-point'
}
```

##### ✔️ good
```js
const MAP_LAYER_DIC = {
    COMMON_MAP_POINT: 'common-map-point'
}
```

### ts类型定义
#### 1. 普通类型
普通类型大写开头，也就是大驼峰，可以为了增加区别在结尾加Ts。
##### ❌ bad
```ts
type formType = 'input' | 'checkbox'

interface position {}
```

##### ✔️ good
```ts
type FormType = 'input' | 'checkbox'

interface Position {}

interface PositionTs {}

```
#### 2. 命名空间
所有命名空间相关变量都需要全部大写，多个单词以 `_` 相连, 为了增加区分可以在结尾增加`_NAMESPACE`, 命名空间命名尽量详细，单词量多，避免重复。

##### ❌ bad
```ts
namespace mapLayer {
    interface CommonMapPoint {}
}

namespace mapLayerNameSpace {
    interface CommonMapPoint {}
}
```

##### ✔️ good
```ts
namespace MAP_LAYER {
    interface CommonMapPoint {}
}

namespace MAP_LAYER_NAMESPACE {
    interface CommonMapPoint {}
}
```

#### 3. `api`请求相关namespace类型
`api`请求相关namespace类型，全大写，_连接，以`API_REQUEST`或`API_RESPONSE`结尾(由于此api命名空间会注入全局，所以希望严格准守命名规则不然容易污染全局),前者代表请求发送参数类型，后者代表请求回传参数类型。 命名空间内部类型命名可以自定义，可以以请求方法的名称命名。
##### ❌ bad
```ts
namespace sendMapLayer {
    interface CommonMapPoint {}
}
namespace getMapLayer {
    interface CommonMapPoint {}
}

```

##### ✔️ good
```ts
namespace MAP_LAYER_API_REQUEST { // `REQUEST`请求参数namespace
    interface CommonMapPoint {}
}

namespace PUBLIC_API_RESPONSE { // `RESPONSE`响应参数namespace
    interface CommonMapPoint {}
}
```
