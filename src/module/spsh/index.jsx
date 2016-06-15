/*待审批事项*/
module.exports = {
    path: 'spsh(/)',
    breadcrumbName:'逐级审核 / 待审批事项',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}