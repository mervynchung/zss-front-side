/*执业资质数据分析*/
module.exports = {
    path: 'xtywbb/zyzzsjfx(/)',
    breadcrumbName:'系统业务报表/执业资质数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}