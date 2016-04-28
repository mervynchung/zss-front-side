/*业务报备管理*/
module.exports = {
    path: 'ywgl/ywbbgl(/)',
    breadcrumbName:'业务报备管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}