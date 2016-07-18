/*事务所设立*/
module.exports = {
    path: 'spsh/module/1',
    breadcrumbName:'逐级审核 / 待审批事项 / 事务所设立',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}