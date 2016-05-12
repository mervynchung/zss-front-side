/*未上报报表查询*/
module.exports = {
    path: 'sdsbbb/wsbbbcx(/)',
    breadcrumbName:'报表管理/手动上报报表/未上报报表查询',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}