/*利润表*/
module.exports = {
    path: 'add/swsqkb(/)',
    breadcrumbName:'事务所基本情况上报1',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}