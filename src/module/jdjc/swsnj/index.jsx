/*事务所年检*/
module.exports = {
    path: 'jdjc/swsnj(/)',
    breadcrumbName:'事务所年检',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}