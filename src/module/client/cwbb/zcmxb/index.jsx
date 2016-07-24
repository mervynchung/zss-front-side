/*利润表*/
module.exports = {
    path: 'add/zcmxb(/)',
    breadcrumbName:'支出明细表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}