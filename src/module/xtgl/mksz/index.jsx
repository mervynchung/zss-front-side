/*模块设置功能*/
module.exports = {
    path: 'mksz(/)',
    breadcrumbName:'模块设置',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}