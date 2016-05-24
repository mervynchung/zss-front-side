/*未上报报表查询*/
module.exports = {
    path: 'fzylsjl/fzyzjjl(/)',
    breadcrumbName:'非执业转籍记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}