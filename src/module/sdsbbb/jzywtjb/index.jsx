/*模块设置功能*/
module.exports = {
    path: 'sdsb/jzywtjb(/)',
    breadcrumbName:'鉴证业务统计表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}