/*模块设置功能*/
module.exports = {
    path: 'fzylsjl/fzyzxjl(/)',
    breadcrumbName:'非执业注销记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}