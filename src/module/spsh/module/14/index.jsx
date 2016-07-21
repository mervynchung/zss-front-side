/*非执业注册税务师转籍*/
module.exports = {
    path: 'spsh/module/14',
    breadcrumbName:'逐级审核 / 待审批事项 / 非执业注册税务师转籍',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}