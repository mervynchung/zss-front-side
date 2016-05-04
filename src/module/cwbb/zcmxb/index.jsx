/*模块设置功能*/
module.exports = {
    path: 'cwbb/zcmxb(/)',
    breadcrumbName:'支出明细表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}