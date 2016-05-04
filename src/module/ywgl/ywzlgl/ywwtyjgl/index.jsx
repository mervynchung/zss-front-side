/*业务委托预警管理*/
module.exports = {
    path: 'ywgl/ywwtyjgl',
    breadcrumbName:'业务委托预警管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}