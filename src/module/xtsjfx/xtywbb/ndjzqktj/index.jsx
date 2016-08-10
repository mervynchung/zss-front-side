/*年度鉴证情况统计*/
module.exports = {
    path: 'xtywbb/ndjzqktj(/)',
    breadcrumbName:'系统业务报表/年度鉴证情况统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}