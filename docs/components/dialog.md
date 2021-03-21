# Dialog 对话框

## 自定义对话框

- 预览

<dialog-demo></dialog-demo>

- 示例代码

```html
<j-button type="primary" @click="visible = true">点我显示对话框</j-button>
<j-dialog :visible.sync="visible">
  <template slot="header"> 自定义标题 </template>
  <span>自定义显示内容</span>
  <template slot="footer">
    <j-button @click="visible = false">取消</j-button>
    <j-button type="primary" @click="visible = false">确定</j-button>
  </template>
</j-dialog>
```
