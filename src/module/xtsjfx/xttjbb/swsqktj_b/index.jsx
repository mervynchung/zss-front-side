/*系统统计报表b*/
module.exports = {
    path: 'xttjbb/swsqktj_b(/)',
    breadcrumbName:'报表管理/系统统计报表/事务所情况统计表B',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}