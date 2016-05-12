/*模块设置功能*/
module.exports = {
    path: 'jdjc/zyswsnjb(/)',
    breadcrumbName:'执业注册税务师年检',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}