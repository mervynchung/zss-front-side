/*客户信息管理功能*/
module.exports = {
    path: '/ywgl/khxxgl',
    breadcrumbName:'客户信息管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}