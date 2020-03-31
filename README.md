
Koa Typescript 项目模板

## 控制器

支持装饰器注册路由

```ts
// controller/Home.controller.ts
import BaseController from './base.controller'
import { get } from '../decorators'

class HomeController extends BaseController {
  @get('/')
  async index () {
    // console.log(this.context.query)
    return 'Hi!'
  }
}

export default HomeController

// controller/index.ts
import HomeController from './Home.controller'

export default [
  HomeController
]
```