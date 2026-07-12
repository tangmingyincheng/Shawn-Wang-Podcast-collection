# 王自如项目仓库

这是一个围绕“王自如”主题整理的静态展示仓库，主入口在 [wangziru-hub](wangziru-hub/index.html)。

## 目录

- [wangziru-hub](wangziru-hub) - 主展示页、设计演示和预览脚本
- [像素ui](像素ui) - 角色与素材资源

## 主要内容

- [wangziru-hub/index.html](wangziru-hub/index.html) - 站点主页面
- [wangziru-hub/design-demos](wangziru-hub/design-demos) - 多个设计演示页面
- [wangziru-hub/preview](wangziru-hub/preview) - Playwright 录制与视频转换脚本

## 预览目录

`preview` 目录里的脚本用于录制页面并转换成视频，依赖在 [wangziru-hub/preview/package.json](wangziru-hub/preview/package.json)。

如果要重新安装依赖：

```bash
cd wangziru-hub/preview
npm install
```

## 本地查看

直接在浏览器打开 [wangziru-hub/index.html](wangziru-hub/index.html) 即可查看主页面。