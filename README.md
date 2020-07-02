# CClick
单击、双击与长按不冲突的解决方案
支持TypeScript

### 调用
```
npm install cclick
```

``` typescript
import CClick from "cclick";

let a = new CClick(document.getElementById(""));
a.click((e) => {// TODO});
a.dbClick((e) => {// TODO});
a.longClick((e) => {// TODO});
```

### 说明
1. 单击事件默认延迟250ms后执行
2. 长按事件默认按住700ms后执行