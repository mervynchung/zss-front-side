/*事务所基本情况表*/
module.exports = {
    path: 'sdsbbb/swsjbqkb(/)',
    breadcrumbName:'事务所基本情况表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}