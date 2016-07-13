/*执业注册税务师年检 */
module.exports = {
    path: 'spsh/module/12',
    breadcrumbName:'逐级审核 / 待审批事项 / 执业注册税务师年检 ',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}