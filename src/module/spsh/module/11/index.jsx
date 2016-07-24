/*事务所年检*/
module.exports = {
    path: 'spsh/module/11',
    breadcrumbName:'逐级审核 / 待审批事项 / 事务所年检',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}