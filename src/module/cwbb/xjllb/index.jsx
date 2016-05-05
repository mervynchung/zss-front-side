/*模块设置功能*/
module.exports = {
    path: 'cwbb/xjllb(/)',
    breadcrumbName:'现金流量表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}