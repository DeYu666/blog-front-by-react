# 启动项目

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




## 参考资料

轮播图走马灯：https://github.com/akiran/react-slick



## 修改进度
- 今天适配了一下手机版的首页，其他的慢慢来吧。之后做个加载动画吧，先不优化加载性能了。
- 


# 启动项目

install taobao image:

```

npm cache clean -f

npm install -g n

n 14.16.0

npm install -g npm@9.4.0

npm install -g cnpm --registry=http://registry.npmmirror.com


```

install craco

```
cnpm install @craco/craco

cnpm remove @craco/craco

cnpm install @craco/craco@0.0.3
```



```
# change registry
npm config set registry https://registry.npm.taobao.org

# install cnpm
npm config set registry http://registry.cnpmjs.org

# install react
cnpm install -g create-react-app

# create project
create-react-app blog-front-by-react


# install antd
cnpm install antd

# install dependence
cnpm install react-router-dom
cnpm install react-slick

```