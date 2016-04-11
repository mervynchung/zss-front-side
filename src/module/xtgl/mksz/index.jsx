/*中心端模块设置功能*/
module.exports = {
    path: 'xtgl/zxdmksz(/)',
    breadcrumbName:'中心端模块设置',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}