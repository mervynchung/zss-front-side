/*中心端模块设置功能*/
module.exports = {
    path: 'xtgnsz/zxdmkgl(/)',
    breadcrumbName:'中心端模块管理',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}