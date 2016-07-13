/*其他从业人员注销*/
module.exports = {
    path: 'spsh/module/43',
    breadcrumbName:'逐级审核 / 待审批事项 / 其他从业人员注销',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}