/*利润表*/
module.exports = {
    path: 'client_1/jysrqkb(/)',
    breadcrumbName:'经营收入情况统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}