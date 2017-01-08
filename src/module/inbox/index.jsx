/*站内短信收件箱*/
module.exports = {
    path: '/inbox(/)',
    breadcrumbName:'收件箱',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}