/*执业税务师行业收入情况统计表*/
module.exports = {
    path: 'sdsbbb/jysrqktj(/)',
    breadcrumbName:'执业税务师行业收入情况统计表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}