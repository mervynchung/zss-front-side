/*事务所变更审批*/
module.exports = {
    path: 'spsh/module/5',
    breadcrumbName:'逐级审核 / 待审批事项 / 执业注册税务师备案审批',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}