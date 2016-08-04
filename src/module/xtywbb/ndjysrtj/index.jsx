/*年度经营收入统计*/
module.exports = {
    path: 'xtywbb/ndjysrtj(/)',
    breadcrumbName:'系统业务报表/年度经营收入统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}