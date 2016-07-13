/*其他从业人员转执业*/
module.exports = {
    path: 'spsh/module/44',
    breadcrumbName:'逐级审核 / 待审批事项 / 其他从业人员转执业',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}