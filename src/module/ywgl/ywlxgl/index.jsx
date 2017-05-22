/*业务类型管理*/
module.exports = {
    path: '/ywlxgl(/)',
    breadcrumbName:'业务类型管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}