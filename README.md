# 前后端分离商城项目（Vue2 + Node.js）

本项目是一个基于 **Vue2** 和 **Node.js** 的前后端分离商城系统，包含完整的用户注册登录、商品浏览、购物车管理、订单处理等功能模块，适合用于学习和参考电商类项目的全流程开发。

---

## 🛠 技术栈

- 前端：Vue2、Vue Router、Axios
- 后端：Node.js（Express）
- 数据库：可自由扩展（例如 MongoDB 或 MySQL）
- 前后端通信：RESTful API
- 部署：前端打包后的 `dist` 放入后端 `public` 目录中，运行 `app.js` 即可启动

---

## 📦 项目功能一览

### ✅ 用户模块

- 用户注册（注册时填写4位数字验证码）
- 用户登录、退出登录
- 记住当前登录状态，下次打开无需重新登录

### 🛍 商品模块

- 浏览商品列表
- 查看商品详情
- 添加商品到购物车
- 商品图片轮播图（响应式无缝轮播图组件）
- 商品图片放大镜查看
- 数量加减按钮 + 上下翻滚动画

### 🛒 购物车模块

- 查看购物车商品
- 修改购物车商品数量
- 删除购物车商品
- 结算并购买商品（实现商品的增、删、改、查）

### 📦 订单模块

- 查看购物订单
- 查看历史购物记录

### 📌 交互优化

- 鼠标触碰时才发送请求，优化网络与性能
- 发送地区选择等可复用组件封装良好

---

## 📁 项目结构说明

