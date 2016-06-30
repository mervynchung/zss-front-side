/*事务所变更审批*/
module.exports = {
    path: 'spsh/module/4',
    breadcrumbName:'逐级审核 / 待审批事项 / 事务所注销审批',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}