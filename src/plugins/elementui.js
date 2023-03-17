import { ElButton, ElMessage, ElSwitch } from "element-plus";

import { ElButton, ElSwitch, ElForm, ElFormItem, ElInput } from "element-plus"
export default (app) => {
    app.use(ElButton);
    app.use(ElSwitch);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.use(ElMessage);
}