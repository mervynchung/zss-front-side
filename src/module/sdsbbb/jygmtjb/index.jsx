/*模块设置功能*/
module.exports = {
    path: 'sdsb/jygmtjb(/)',
    breadcrumbName:'经营规模统计表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}