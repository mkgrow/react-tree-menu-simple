### 本地启动
```
git clone git@github.com:mkgrow/react-tree-menu-simple.git
npm install
npm start

```

### 使用
```
 npm install react-tree-menu-simple
 
 import Tree from 'react-tree-menu-simple'
 
 <Tree className='' data={data} onSelect={() => {}} />

```

### 参数说明
```
现在只支持3个参数：
 data: 树形结构数据
 onSelect: 选中事件
 className: 最外层样式
 
 每条数据的颜色支持在data中添加:
 [
    {
        text: '',
        className: '',
        children: []
     }
 ]
```

### More

```
树形结构，有子数据时并展开时现实'-'图标，收起时显示'+'图标。
可直接使用，也可以复制代码到项目中修改。
```
