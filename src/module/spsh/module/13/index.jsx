/*非执业注册税务师转执业*/
module.exports = {
    path: 'spsh/module/13',
    breadcrumbName:'逐级审核 / 待审批事项 / 非执业注册税务师转执业',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}