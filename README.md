# 必读

## 启动

```
npx react-native run-android
```

## 已封装组件

1. Toast 组件（类似于 小程序 showToast 效果）

## 项目依赖

### 组件库

#### React Native Elements

地址：https://reactnativeelements.com/

- @rneui/themed 
- @rneui/base

#### React Native Paper

**安卓风格组件**

地址：https://callstack.github.io/react-native-paper/

- react-native-paper

### 图标库

- @react-native-vector-icons

### 路由

- @react-navigation

### 网络

- axios

### 加密

- jsencrypt

### 储存

- @react-native-async-storage/async-storage

### 状态管理

- zustand

### 拍照录像

- react-native-image-picker

### 网页显示

- react-native-webview （用于展示 高德 Web SDK）

### 地图

- react-native-amap3d （此项目已不再维护）

### 图表

- 

### 图片预览

三个还在更新的组件库

- https://github.com/nandorojo/galeria  这个不行 这个是基于expo的
- https://github.com/Glazzes/react-native-zoom-toolkit
- https://github.com/likashefqet/react-native-image-zoom

图片预览实现所依赖的库：

- react-native-reanimated

- react-native-worklets （此库需要安装`react-native-worklets`依赖项。为了实现更好的模块化，它被分离出来`react-native-reanimated`，必须单独安装。）

  ​		





## 更改应用名称

android/app/src/main/res/values/strings.xml

```
<resources>
    <string name="app_name">RN原生示例</string>
</resources>
```



## 更改应用图标

android/app/src/main/res

生成图标网址：https://icon.wuruihong.com/

![image-20250825113257431](C:\Users\cat20\AppData\Roaming\Typora\typora-user-images\image-20250825113257431.png)



替换即可

## 清理缓存

```
cd android 
./gradlew clean
```







