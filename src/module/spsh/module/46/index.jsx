/*非执业注册税务师转执业(事务所端)*/
module.exports = {
    path: 'spsh/module/46',
    breadcrumbName:'逐级审核 / 待审批事项 / 非执业注册税务师转执业(事务所端)',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}