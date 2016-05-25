/*未上报报表查询*/
module.exports = {
    path: 'fzylsjl/fzyzzyjl(/)',
    breadcrumbName:'省内非执业转执业记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}